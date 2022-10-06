## Dependencias instaladas

- **@types/express** : contiene definiciones de tipo para express.
- **@types/jest** :  contiene definiciones de tipo para jest para poder hacer testin a un archivo .ts.
- **@types/node** :    contiene definiciones de tipo para node y puedes usar node con .ts.
- **@typescript-eslint/eslint-plugin** : Identifica errores que se encuentren en el codigo typescript
- **concurrently** : ejecuta varios comando al mismo tiempo para agilizar mejor el proceso.
- **eslint** : Identifica errores que se encuentren en el codigo
- **eslint-config-standard-with-typescript** : Configura una serie de reglas para Typescript
- **eslint-plugin-import** : evita problemas con la ortografia y sintaxis
- **eslint-plugin-n** : añade reglas adicionales para Node.js
- **eslint-plugin-promise** : perimte añadir mejores practicas para promesas
- **jest** : paquete para hacer testing
- **nodemon** : erramienta para desarrollar aplicaciones, detecta cambios y reincia el servidor
- **supertest** : prueba para HTTP
- **ts-jest** :transforma jest para usar probar proyectos en typescript
- **ts-node** : ejecuta node con typescript
- **typescript** : superset de javascript
- **webpack** : empaquetador de modulos, permite generear un archivo unico con todos los modulos necesarios
- **webpack-cli** : ejecuta webpack en la linea de comandos y proporciona comando para los desarrolladores
- **webpack-node-externals** : define elementos externos que no se deben agrupar
- **webpack-shell-plugin** : ejecuta comandos shell para webpack

## Scripts

  **build: "npx tsc "** => transpila todo los archivoc typescript a javascript
  **dev: "concurrently \"npx tsc --watch \" \"nodemon -q dist/index.js \""** => ejecuta varios comandos como permitir ver cambios en un arvhico typescript y correr el servidor en index.js 
  **start: "node dist/index.js"** => inicia el servidor 
  **test: "jest"** => testing

## Variables de entorno

Para utilzar el el codigo, primero tiene que crear una variable de entorno ---> __.env__ y en ella configurar el puerto:

```
PORT = 8000
```

de esta manera todo los procesos que utilizen el puerto no tendran problemas.



 
