# EdYOf Platform

## Tecnologías utilizadas
- Nextjs
- Reactjs
- Typeorm
- Postgresql
- PNPM

## Comandos a ejecutar
1. Copiar y renombrar el __.env.example__ a un __.env__ y cambiar los valores de las propiedades si es necesario.

2. Levantar el contenedor de docker
``` bash
docker compose up -d
```

3. Instala el manejador de paquetes __pnpm__
``` bash
npm install -g pnpm 
``` 

4. Instalar las dependencias del proyecto
``` bash
pnpm install 
``` 

5. Correr las migraciones para crear las entidades
``` bash
pnpm run migration:run 
```

6. Correr el proyecto en modo desarrollo
``` bash
pnpm run dev 
``` 