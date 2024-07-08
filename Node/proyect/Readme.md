# Práctica de Express - Curso de Backend Con Node.js en Platzi

Este proyecto es una práctica avanzada de Express, realizada en el marco del curso de Backend con Node.js ofrecido por Platzi. A continuación, se detallan las mejoras y características implementadas:

- **Adopción de ES6:** Se ha actualizado la sintaxis para utilizar `import/export` de ES6, reemplazando el uso tradicional de `require/module.exports`.
- **Arquitectura MVC:** Para una mayor organización y mantenibilidad del código, se ha implementado el patrón de arquitectura Modelo-Vista-Controlador (MVC).
- **Futuras Mejoras:** Se planea integrar TypeScript para fortalecer la tipificación y mejorar el flujo de desarrollo del proyecto.

## Requisitos
Para ejecutar este proyecto, es necesario definir un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:

```
PORT=3000
```

## Instalación
Ejecuta el siguiente comando para instalar las dependencias necesarias:

```
npm install
```


## Ejecución
Para iniciar el servidor en modo de desarrollo, utiliza:

```
npm run dev
```


## API Endpoints

La API proporciona los siguientes endpoints:

- **Obtener Productos:**
  - `GET /api/v1/products`: Retorna todos los productos disponibles. Por defecto, se limita a 10 productos.
    - Parámetro opcional: `?limit=5` permite especificar la cantidad de productos a retornar, con un máximo de 100.

- **Obtener Producto por ID:**
  - `GET /api/v1/products/:id`: Obtiene los detalles de un producto específico mediante su ID.