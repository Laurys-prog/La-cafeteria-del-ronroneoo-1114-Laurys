# La Cafetería del Ronroneoo — Sitio Web Oficial

Repositorio correspondiente al sitio web oficial de **La Cafetería del Ronroneoo**. El proyecto consiste en una plataforma digital orientada a la presentación del catálogo de productos, información institucional, ubicación del establecimiento y canales de contacto.

---

##  Tabla de Contenidos
- [Descripción del Proyecto](#descripción-del-proyecto)
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Repositorio](#estructura-del-repositorio)
- [Instalación y Despliegue](#instalación-y-despliegue)
- [Roadmap](#roadmap)
- [Licencia](#licencia)

---

##  Descripción del Proyecto

El sitio web tiene como objetivo principal digitalizar la oferta comercial de la cafetería, facilitando a los clientes el acceso al menú actualizado, la consulta de horarios de atención,la posibilidad de solicitar dedicatorias o mesas para ocasiones especiales, la facilidad para ordenar desde su mesa y la localización del local comercial. La plataforma está optimizada para ofrecer una navegación fluida en las pantallas ubicadas en las mesas del local .

---

##  Características

- **Catálogo digital:** Menú interactivo estructurado por categorías (cafés, bebidas frías, repostería).
- **Diseño adaptativo (Responsive Design):** Interfaz compatible con múltiples resoluciones de pantalla.
- **Módulo de ubicación:** Integración de mapa interactivo e información de horarios comerciales.
- **Formulario de contacto:** Sección dedicada a consultas, reservas o sugerencias.

---

##  Tecnologías Utilizadas

- **HTML5:** Marcado semántico y estructura web.
- **CSS3:** Estilos, maquetación adaptativa (Flexbox/CSS Grid) y variables de diseño.
- **JavaScript (ES6+):** Lógica de interacción en el frontend y manipulación del DOM.

---

## Estructura del Repositorio

```text
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   └── products.mjs
├── tests/
│   └── catalog.test.mjs
├── index.html
└── README.md
```

## Estado actual

El MVP inicial incluye un menú con seis productos, carrito local, control de cantidades y cálculo de total. La confirmación de pedido, reservas, dedicatorias, pagos e integraciones se desarrollarán por incrementos posteriores.

Para verificar los datos del catálogo desde la terminal:

```bash
node tests/catalog.test.mjs
```

## Roadmap

1. Confirmación local de la comanda y mensajes de interfaz.
2. Información de horario y ubicación.
3. Funcionalidades de dedicatorias y reservas, solo después de validar los incrementos anteriores.
