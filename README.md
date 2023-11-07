# Frontend-Glolearn

CREAR EL PROYECTO:

1. npm install -g @angular/cli ----> Instalar angular

2. ng new nombre_proyecto ----> Crear nuevo proyecto (Estructura base)

3. npm i ----> installar las dependencias de NodeJS

4. ng add @angular/material ----> Instalar angular material (Estilo base)

5. ng g m nombre_modulo --flat ----> Crear nuevo modulo

   g: abreviación de “generate”, se puede bien escribir la palabra “generate” o solo la “g”.
   m: abreviación de “module”, se puede bien escribir la palabra “module” o solo la “m”.
   --flat: indica que se crea un archivo para el módulo si colocarlo dentro de una carpeta específica. Si se quita este indicador, se creará una carpeta para el módulo.

6. ng g s services/nombre_servicio ----> Crear un servicio

7. ng g c components/nombre_componente --skip-import ---->Crear un componente

EJECUTAR EL PROYECTO:

- ng serve ----> Iniciar el servidor (antes de configurar el start con el proxy)
  -npm start ----> Iniciar el servidor con el componente proxy
