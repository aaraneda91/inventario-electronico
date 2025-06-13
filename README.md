**Desafío: Sistema de Gestión de Inventario para una Tienda de Electrónica**



**Descripción:** Desarrollar un sistema básico para gestionar el inventario de productos en
una tienda de electrónica. El backend (Node.js) proporcionará una API REST para gestionar
los productos, y el frontend (React.js) consumirá esta API para mostrar, añadir, editar y
eliminar productos.

**Requisitos del Backend (Node.js con mysql2)**
Tu API de Node.js debe:

1. **Base de Datos MySQL:**
    o Utilizar la base de datos estacion_pixel (o la que uses) y la tabla productos
       que ya tienes:
          ▪ idproductos (PK, INT, AUTO_INCREMENT)
          ▪ nombre (VARCHAR)
          ▪ precio_neto (DECIMAL)
          ▪ precio_bruto (DECIMAL)
          ▪ stock (INT)
    o **Desafío Adicional (Opcional pero recomendado):** Crea una tabla categorias
       (id, nombre_categoria) y añade una columna id_categoria (FK) a la tabla
       productos para relacionar productos con categorías.
2. **API RESTful:**
    o **GET /api/products** : Obtener todos los productos.
    o **GET /api/products/:id** : Obtener un producto por su idproductos.
    o **POST /api/products** : Crear un nuevo producto.
       ▪ Requiere un cuerpo JSON con nombre, precio_neto, precio_bruto,
          stock.
       ▪ **Validación:** Implementar una validación básica (ej. nombre no vacío,
          precio_neto, precio_bruto, stock sean números positivos).
    o **PUT /api/products/:id** : Actualizar un producto existente.
       ▪ Requiere el idproductos en la URL y un cuerpo JSON con los campos
          a actualizar.
       ▪ **Validación:** Similar a POST.
    o **DELETE /api/products/:id** : Eliminar un producto.
    o **Desafío Adicional (Opcional):**
       ▪ **GET /api/categories** : Obtener todas las categorías (si implementas la
          tabla de categorías).


```
▪ Filtrado/Búsqueda: Añadir la capacidad de filtrar productos por
nombre o por categoría usando query parameters (ej.
/api/products?search=laptop o /api/products?category_id=1).
▪ Paginación: Implementar paginación para la lista de productos (ej.
/api/products?page=1&limit=10).
```
3. **Manejo de Errores:**
    o Devolver códigos de estado HTTP apropiados (200 OK, 201 Created, 400
       Bad Request, 404 Not Found, 500 Internal Server Error).
    o Proporcionar mensajes de error claros en formato JSON.
4. **Estructura de Archivos:**
    o Mantén la estructura que ya hemos discutido (config, src/controllers,
       src/models (como DAOs), src/routes, src/database, src/utils, server.js).

**Requisitos del Frontend (React.js)**
Tu aplicación de React debe:

1. **Pantalla Principal (Dashboard/Lista de Productos):**
    o Mostrar una tabla con la lista de todos los productos disponibles.
    o La tabla debe mostrar al menos idproductos, nombre, precio_neto,
       precio_bruto, stock.
    o **Desafío Adicional (si aplicas categorías):** Mostrar el nombre de la categoría
       del producto.
    o Botones para "Editar" y "Eliminar" junto a cada producto.
    o Un botón "Añadir Nuevo Producto".
2. **Formulario de Añadir/Editar Producto:**
    o Cuando se haga clic en "Añadir Nuevo Producto" o "Editar", se debe abrir
       un **modal o una nueva vista/página** con un formulario.
    o El formulario debe tener campos para nombre, precio_neto, precio_bruto,
       stock.
    o Si es edición, el formulario debe precargarse con los datos del producto
       seleccionado.
    o Botón "Guardar" y "Cancelar".
    o **Validación básica en el cliente:** Campos obligatorios, números, etc.
    o **Desafío Adicional (si aplicas categorías):** Un select con las categorías
       disponibles (obtenidas desde tu API /api/categories).
3. **Interacción con la API:**
    o Utilizar fetch o axios para todas las peticiones a tu API de Node.js.


```
o Después de añadir, editar o eliminar un producto, la lista de productos en la
tabla principal debe refrescarse automáticamente sin recargar la página
completa.
```
4. **Manejo de Estados:**
    o Gestionar el estado de la aplicación de forma eficiente (usando useState,
       useEffect en React).
5. **Notificaciones (Opcional):**
    o Mostrar mensajes de éxito o error al usuario después de una operación (ej.
       "Producto añadido exitosamente", "Error al eliminar producto").
6. **Enrutamiento (Opcional, si usas vistas separadas en lugar de modales):**
    o Si decides tener una página /products y una página /products/add o
       /products/edit/:id, necesitarás react-router-dom.

**Herramientas Sugeridas:**

- **Backend:**
    o Node.js, Express.js
    o mysql2/promise
    o dotenv
    o express-validator (para validación de API)
    o nodemon (para desarrollo, reinicio automático del servidor)
- **Frontend:**
    o React.js (creado con create-react-app o Vite)
    o axios (alternativa a fetch para peticiones HTTP)
    o react-bootstrap o Material-UI (para componentes UI como modales, tablas,
       formularios) - **Recomendado para ahorrar tiempo en CSS**.
    o react-toastify (para notificaciones)

**Puntos de Enfoque clave:**

- **Comunicación Cliente-Servidor:** Entender cómo el frontend envía datos al backend
    y cómo el backend responde.
- **Gestión de Estado en React:** Cómo React actualiza su interfaz de usuario en
    respuesta a cambios de datos (por ejemplo, después de una operación CRUD).
- **Manejo de Errores en ambos lados:** Qué hacer cuando algo sale mal.
- **Modularidad:** Mantener el código organizado y limpio en ambos lados.


