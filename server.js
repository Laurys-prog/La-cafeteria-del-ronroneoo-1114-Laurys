const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const crypto = require("crypto");

const app = express();
const PORT = Number(process.env.PORT || 3000);
const ADMIN_KEY = process.env.ADMIN_KEY;

if (!ADMIN_KEY || ADMIN_KEY.length < 8) {
  console.error("ERROR: Define ADMIN_KEY con al menos 8 caracteres antes de iniciar el servidor.");
  process.exit(1);
}

const dataDir = path.join(__dirname, "data");
const fs = require("fs");
fs.mkdirSync(dataDir, { recursive: true });
const db = new sqlite3.Database(path.join(dataDir, "reservas.sqlite"));

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS reservas (
      id TEXT PRIMARY KEY,
      nombre TEXT NOT NULL,
      personas TEXT NOT NULL,
      fecha TEXT NOT NULL,
      hora TEXT NOT NULL,
      dedicatoria TEXT NOT NULL DEFAULT '',
      estado TEXT NOT NULL DEFAULT 'Pendiente',
      creada TEXT NOT NULL
    )
  `);
});

app.disable("x-powered-by");
app.use(express.json({ limit: "20kb" }));
app.use(express.static(path.join(__dirname, "public")));

function requireAdmin(req, res, next) {
  const supplied = req.get("x-admin-key") || "";
  const a = Buffer.from(supplied);
  const b = Buffer.from(ADMIN_KEY);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
    return res.status(401).json({ error: "Clave de administrador incorrecta." });
  }
  next();
}

function validDate(date) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date || "")) return false;
  const parsed = new Date(`${date}T00:00:00`);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === date;
}

app.post("/api/reservas", (req, res) => {
  const { nombre, personas, fecha, hora, dedicatoria = "" } = req.body || {};
  const nombreLimpio = typeof nombre === "string" ? nombre.trim() : "";
  const personasLimpio = typeof personas === "string" ? personas.trim() : "";
  const horaValida = typeof hora === "string" && /^([01]\d|2[0-3]):[0-5]\d$/.test(hora);

  if (!nombreLimpio || nombreLimpio.length > 100 ||
      !["1 persona", "2 personas", "3 personas", "4 personas", "5 personas", "6+ personas"].includes(personasLimpio) ||
      !validDate(fecha) || !horaValida ||
      typeof dedicatoria !== "string" || dedicatoria.length > 500) {
    return res.status(400).json({ error: "Datos de reserva no válidos." });
  }

  const today = new Date();
  const localToday = `${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,"0")}-${String(today.getDate()).padStart(2,"0")}`;
  if (fecha < localToday) return res.status(400).json({ error: "La fecha debe ser hoy o una fecha futura." });

  const reserva = {
    id: crypto.randomUUID(),
    nombre: nombreLimpio,
    personas: personasLimpio,
    fecha,
    hora,
    dedicatoria: dedicatoria.trim(),
    estado: "Pendiente",
    creada: new Date().toISOString()
  };

  db.run(
    `INSERT INTO reservas (id, nombre, personas, fecha, hora, dedicatoria, estado, creada)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [reserva.id, reserva.nombre, reserva.personas, reserva.fecha, reserva.hora,
     reserva.dedicatoria, reserva.estado, reserva.creada],
    function (err) {
      if (err) {
        console.error("Error guardando reserva:", err.message);
        return res.status(500).json({ error: "No se pudo guardar la reserva." });
      }
      res.status(201).json({ id: reserva.id, mensaje: "Reserva guardada." });
    }
  );
});

app.get("/api/reservas", requireAdmin, (req, res) => {
  db.all("SELECT * FROM reservas ORDER BY creada DESC", [], (err, rows) => {
    if (err) {
      console.error("Error consultando reservas:", err.message);
      return res.status(500).json({ error: "No se pudieron consultar las reservas." });
    }
    res.json(rows);
  });
});

app.delete("/api/reservas/:id", requireAdmin, (req, res) => {
  db.run("DELETE FROM reservas WHERE id = ?", [req.params.id], function (err) {
    if (err) return res.status(500).json({ error: "No se pudo eliminar la reserva." });
    if (!this.changes) return res.status(404).json({ error: "Reserva no encontrada." });
    res.json({ mensaje: "Reserva eliminada." });
  });
});

app.delete("/api/reservas", requireAdmin, (req, res) => {
  db.run("DELETE FROM reservas", [], function (err) {
    if (err) return res.status(500).json({ error: "No se pudieron eliminar las reservas." });
    res.json({ mensaje: "Reservas eliminadas.", eliminadas: this.changes });
  });
});

app.listen(PORT, () => {
  console.log(`La Cafetería del Ronroneo está disponible en http://localhost:${PORT}`);
});
