# Product Requirement Document (PRD)

## Documento de Requisitos de Producto — Plataforma Web de Cafetería

| Metadato | Detalle |
| :--- | :--- |
| **Nombre del Producto** | Plataforma Digital de Atención y Menú en Mesa |
| **Estado** | En Definición / Borrador |
| **Versión** | 1.0 |
| **Auditoría / Diseño** | Ambiente Formal |
| **Paleta Principal** | Café Oscuro, Tonos Tierra, Acentos Neutros |

---

## 1. Visión General del Producto

### 1.1 Objetivo Principal
Digitalizar la oferta comercial de la cafetería mediante una plataforma web integrada que permita a los clientes consultar el menú actualizado, verificar horarios de atención, solicitar dedicatorias o reservas de mesas para ocasiones especiales y realizar pedidos directamente desde sus mesas a través de pantallas dedicadas.

### 1.2 Identidad Visual y Experiencia de Usuario (UI/UX)
* **Ambiente y Estilo:** Formal, sobrio y elegante.
* **Paleta de Colores:** Basada en tonos café oscuro (espresso, cacao), contrastada con acentos neutros y dorados/beige suave para lecturas claras.
* **Optimizaciones del Hardware:** Diseñada específicamente para una navegación fluida en **pantallas táctiles ubicadas en cada mesa del local**, manteniendo flexibilidad de acceso desde dispositivos móviles personales.

---

## 2. Objetivos del Negocio y Métricas Clave (KPIs)

* **Efectividad Operativa:** Reducir el tiempo promedio de toma de pedido e ingreso a cocina/barra.
* **Satisfacción del Cliente (CSAT):** Incrementar la valoración del servicio mediante una interacción autónoma, discreta y formal.
* **Ticket Promedio:** Elevar la tasa de ventas mediante sugerencias visuales elegantes en la interfaz del menú.
* **Uso de Funciones Especiales:** Fomentar la solicitud de dedicatorias y reservas de eventos o mesas especiales.

---

## 3. Alcance del Producto y Funcionalidades

### 3.1 Módulo de Menú y Oferta Comercial
* **Catálogo Digital Interactivo:** Menú estructurado por categorías (cafés de especialidad, bebidas frías, repostería artesanal, maridajes).
* **Precios y Disponibilidad en Tiempo Real:** Actualización dinámica de platos/bebidas agotados o fuera de temporada.
* **Fichas Detalladas:** Fichas formales por producto con información de notas de cata, alérgenos e ingredientes.

### 3.2 Módulo de Pedidos desde la Mesa
* **Interfaz para Pantallas en Mesa:** Navegación táctil intuitiva optimizada para baja/alta luminosidad dentro del local.
* **Envío Directo a Barra/Cocina:** Confirmación inmediata del pedido en la comanda del personal de servicio.
* **Adición de Productos:** Posibilidad de agregar ítems al pedido existente durante la estancia en el local.

### 3.3 Módulo de Ocasiones Especiales y Personalización
* **Solicitud de Dedicatorias:** Opción dentro de la interfaz para adjuntar notas o mensajes personalizados a bebidas o postres específicos.
* **Reserva de Mesas Especiales:** Formulario de solicitud y configuración para eventos privados o mesas destacadas.

### 3.4 Módulo de Información Institucional y Localización
* **Ubicación e Integración de Mapas:** Indicaciones claras y mapa interactivo del establecimiento.
* **Horarios de Atención:** Módulo dinámico con estados de la cafetería ("Abierto", "Cerrado", "Horario Especial").

---

## 4. Requisitos de Diseño e Interfaz de Usuario (UI)

* **Estética General:** Diseño limpio, tipografías refinadas (estilo serif/sans-serif sobrio) y estructura de alta densidad de legibilidad.
* **Gama Cromática:**
  * **Color Primario:** Café Oscuro `#2A1B16` / `#1F130E`
  * **Color Secundario / Fondo:** Café Tostado / Crema Neutro `#F4EFEA` (para zonas de lectura)
  * **Acentos:** Tonalidades Bronce o Dorado sobrio `#C5A059`
* **Navegación:** Diseñada con botones amplios e interacciones fluidas adaptadas a las pantallas físicas integradas en las mesas.

---

## 5. Requisitos Técnicos y de Rendimiento

* **Arquitectura Web:** Aplicación accesible mediante navegador, adaptable tanto a pantallas de mesa (modo pantalla completa/kiosco) como a dispositivos móviles.
* **Rendimiento:** Tiempos de carga inferiores a 2 segundos para no interrumpir la experiencia del usuario en mesa.
* **Seguridad y Persistencia:** Aislamiento de sesión por mesa para garantizar que cada cliente maneje únicamente su pedido activo.

---

## 6. Fases de Desarrollo (Roadmap)

1. **Fase 1 (MVP):** Menú digital, módulo de pedidos en mesa, horarios y localización con la identidad visual café oscuro formal.
2. **Fase 2:** Integración de la función de dedicatorias en los pedidos y módulo de solicitud de mesas especiales.
3. **Fase 3:** Integración con pasarela de pago directa desde la pantalla de la mesa e integración con sistema POS interno.