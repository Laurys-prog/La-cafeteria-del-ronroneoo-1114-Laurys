# Functional & Technical Specification (Spec)
## Sistema de Atención Digital en Mesa — [ la cafeteria del ronroneo]

| Documento | Especificación Técnica y Funcional |
| :--- | :--- |
| **Versión** | 1.0.0 |
| **Estado** | Aprobado para Desarrollo |
| **Stack Tecnológico** | HTML5, CSS3, JavaScript (Vanilla ES6+) |
| **Plataforma** | Web Application (Kiosk Mode / Responsive) |
| **Target Hardware** | Pantallas Táctiles en Mesa (Tablets/Displays) & Dispositivos Móviles |

---

## 1. Introducción y Arquitectura General

### 1.1 Propósito
Este documento detalla las especificaciones funcionales, la arquitectura de interfaz y la lógica de negocio para la plataforma digital en mesa de **[la cafeteria del ronroneoo]**. El sistema gestiona la interacción directa del cliente desde su mesa, optimizando la toma de pedidos, solicitudes personalizadas y la exposición de la propuesta comercial.

### 1.2 Arquitectura del Sistema
* **Tecnologías Base (Frontend):**
  * **HTML5:** Estructura semántica de la interfaz (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`).
  * **CSS3:** Maquetación adaptativa mediante Flexbox/CSS Grid, animaciones fluidas y definición de variables de estilo (`:root`) para la paleta de colores.
  * **JavaScript (ES6+):** Lógica del lado del cliente, gestión del estado del carrito, manipulación dinámica del DOM, eventos táctiles e interacción de la interfaz sin dependencias de frameworks pesados.
* **Modo Kiosk:** La interfaz en las pantallas de las mesas se ejecuta mediante navegador web en modo pantalla completa sin acceso a la navegación del sistema operativo base.
* **Estilo Visual:** UI de tono formal, alta sofisticación, fondos en café oscuro (`#1C100B`, `#2A1B16`), acentos en color bronce/dorado (`#C5A059`) y tipografías de alto contraste para máxima legibilidad.

---

## 2. Especificación de Módulos Funcionales

### 2.1 Módulo 1: Menú Digital y Catálogo
* **F-01.1 — Categorización:** La interfaz renderizará mediante JavaScript una navegación fija con las categorías: *Cafés de Especialidad, Métodos de Extracción, Bebidas Frías, Repostería, Opciones Saladas*.
* **F-01.2 — Ficha de Producto:** Cada elemento del menú desplegará dinámicamente mediante HTML/CSS:
  * Nombre formal del producto.
  * Descripción detallada, notas de cata y origen (en el caso de cafés).
  * Lista de alérgenos e ingredientes clave.
  * Precio unitario visible en todo momento.
* **F-01.3 — Disponibilidad Dinámica:** Los productos con estado deshabilitado en la estructura de datos JavaScript actualizarán el DOM para desactivar el botón de añadir con la etiqueta visual "Agotado por el momento".

### 2.2 Módulo 2: Gestión de Pedidos en Mesa
* **F-02.1 — Identificador de Mesa:** La sesión de JavaScript capturará y mantendrá en almacenamiento local (`localStorage` / variables de estado) el identificador único asignado al dispositivo (ej. `Mesa_04`).
* **F-02.2 — Carrito de Compras (Comanda en Curso):**
  * Manipulación en tiempo real mediante JavaScript para agregar, modificar cantidades o eliminar ítems antes del envío.
  * Cálculo dinámico del desglose de precios y el total acumulado.
* **F-02.3 — Confirmación y Envío:** Al presionar "Confirmar Pedido", la comanda se procesará mediante eventos de JavaScript para su transmisión/impresión con la etiqueta de la mesa correspondiente.
* **F-02.4 — Adición de Órdenes:** El cliente podrá reabrir la interfaz del menú y enviar una nueva orden complementaria bajo la misma sesión activa.

### 2.3 Módulo 3: Dedicatorias y Ocasiones Especiales
* **F-03.1 — Mensaje de Dedicatoria:** Al seleccionar un ítem de la categoría de repostería o bebidas seleccionadas, se desplegará un campo de texto HTML (`<textarea>`) opcional: *"Añadir dedicatoria o nota especial (Ej. Feliz Aniversario, mensaje en plato/placa de chocolate)"*.
* **F-03.2 — Solicitud de Mesas Especiales:** Formulario HTML interactivo con validación de datos mediante JavaScript que permite al usuario programar o solicitar la reserva de zonas privadas o mesas especiales para fechas futuras, capturando:
  * Nombre completo.
  * Teléfono / Correo de contacto.
  * Fecha, hora y número de comensales.
  * Requerimientos del evento (celebración corporativa, aniversario, etc.).

### 2.4 Módulo 4: Información Institucional y Ubicación
* **F-04.1 — Estado de Operación:** Indicador visual en vivo gestionado por código JavaScript para evaluar la hora actual frente a los horarios de atención y mostrar el estado del local ("Abierto" / "Cerrado").
* **F-04.2 — Ubicación:** Sección maquetada en HTML/CSS con mapa integrado, dirección exacta del establecimiento y canales formales de contacto (teléfono directo, email de atención al cliente).

---

## 3. Guía de Estilos y Requisitos de Interfaz (CSS)

### 3.1 Paleta de Colores (Variables CSS)
```css
:root {
  --bg-principal: #1C100B;      /* Cacao Oscuro / Dark Espresso */
  --bg-contenedor: #2B1A14;     /* Café Tostado Profundo */
  --accent-gold: #C5A059;       /* Bronce Dorado */
  --text-primary: #F5F0EB;      /* Blanco Crema / Warm Off-White */
  --text-secondary: #A89F91;    /* Gris Cálido Neutral */
}