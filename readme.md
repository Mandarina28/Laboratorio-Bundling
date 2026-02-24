# Vite

## Obligatorio

Montar una semilla de proyecto con vite que:

- Esté configurado con TypeScript y que permita detectar errores de tipos en la terminal si los hubiera.
- Se pueda ver el tamaño del bundle.
- Tenga los scripts básicos de desarrollo local:
    - start para levantar el servidor de desarrollo.
    - build para compilar el proyecto y generar bundle de producción.
    - preview para previsualizar el bundle de producción.
- Tenga variables de entorno. Crea un setup de modo que las variables puedan tener un valor para desarrollo y otro distinto para producción. Utiliza un console.log para mostrar su valor por consola, de manera que en desarrollo local (npm start) muestre un valor, pero al levantar la build (npm run preview) su valor sea específico para producción.
- Crea un elemento ```<h1>``` con texto, utilizando la API del DOM, y dale estilos con CSSModules.
  
## Opcional

- Añade la configuración necesaria para que al hacer la build también genere los ficheros de forma comprimida (GZIP y BROTLI), por lo que al hacer la build deberán existir los ficheros dist/index-<hash>.js.gz y un dist/index-<hash>.js.br.
