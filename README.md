#Node.JS

##En este proyecto vamos a  aprender Node.JS

- Que es nodejs: Nodejs es Javascript que corre fuera del navegador, es orientado a eventos, basado en el motor  V8 de google, lo que hace es este motor es interpretar el javascript en el computador. Además usa entrada y salidas asíncronas  no se queda esperando el hilo para terminar la tarea puede hacer otras tareas mientras se termina otra solicitada.

- Módulos:Los módulos son **paquetes o librerías**  que contienen  ciertas funcionalidades que se pueden incluir en nuestro proyecto. Hay módulos  **Núcleos o externos(NPM)** o los creados por nosotros. Se cargan utilizando la palabra reservada **require**. Como regla general se debe llamar a la variable con el mismo nombre del modulo que vamos a cargar.

Ejemplo:  para modulos NPM o de Nucleo.
**var modulo = require(‘modulo’);**

Ejemplo: Para cargar nuestros modulos
**var modulo = require('./.../modulo')**
**var modulo = require('/.../modulo')**

- NMP(Gestor de paquetes): Es un gestor de paquetes “https://www.npmjs.com/”, para usarlo solo se debe abrir una consola y escribir **npm install modulo** o para quitar **npm uninstall modulo**, para actualizar un modulo **npm update modulo** o todos a la vez **npm update **, para buscar entre los módulos **npm search  modulo** 

- Programación orientada a Eventos
- Aplicaciones asíncronas
- Bucles de eventos
- Servidores
- Enrutamiento
- Procesamientos de archivos
- Web sockets
