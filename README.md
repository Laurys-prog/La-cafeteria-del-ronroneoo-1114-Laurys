# La Cafetería del Ronroneo — base de datos real

## Qué incluye
- El sitio web y las imágenes del proyecto original.
- Servidor Node.js + Express.
- Base de datos SQLite persistente (`data/reservas.sqlite`), creada automáticamente al iniciar.
- Formulario que guarda reservas en el servidor.
- Consulta y eliminación de reservas protegidas con una clave de administrador.

## Requisitos
Instala Node.js 18 o superior desde https://nodejs.org/.

## Cómo iniciar en Windows
1. Descomprime el ZIP.
2. Abre la carpeta `cafeteria_ronroneo_con_base_real`.
3. En la barra de dirección del Explorador escribe `cmd` y pulsa Enter (o abre una terminal en esa carpeta).
4. Ejecuta:
   ```bash
   npm install
   ```
5. Define una clave de administrador (usa una clave propia de al menos 8 caracteres):
   ```cmd
   set ADMIN_KEY=ESCRIBE_AQUI_TU_CLAVE_PRIVADA
   ```
6. Inicia el servidor:
   ```bash
   npm start
   ```
7. Abre en el navegador **http://localhost:3000**. No abras `index.html` haciendo doble clic: el sitio debe servirse desde Node.

## Consultar reservas
En la sección de reservas, pulsa **Ver reservas (administrador)** e introduce la misma clave que definiste en `ADMIN_KEY`. La clave solo vive en el servidor; las consultas y eliminaciones la envían en un encabezado HTTP. No uses una clave publicada en un documento compartido. El texto `ESCRIBE_AQUI_TU_CLAVE_PRIVADA` es solo un ejemplo: reemplázalo por una clave propia antes de iniciar el servidor.

## Dónde quedan guardadas
SQLite guarda los datos en `data/reservas.sqlite`. Las reservas permanecen al cerrar el navegador o reiniciar el servidor, siempre que conserves esa carpeta. Haz copias de seguridad de `data/reservas.sqlite`.

## Importante
- Esta base de datos funciona en el equipo donde se ejecuta el servidor. Para que clientes de otros dispositivos la usen, publica el servidor en un hosting que admita Node.js y almacenamiento persistente, y configura una clave de administrador segura como variable de entorno.
- No publiques la base de datos ni compartas la clave de administrador. No incluyas tu clave real en el README ni en archivos que vayas a entregar o compartir.
- Antes de usarlo con clientes reales, conviene añadir HTTPS, límites anti-spam y una política de privacidad. Las reservas contienen datos personales.
- SQLite es una base de datos real y persistente, pero no es un servicio en la nube por sí sola.
