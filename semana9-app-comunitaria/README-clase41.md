# Clase 41 - Entorno de despliegue y primer levantamiento

## Objetivo
Levantar una aplicación Node.js en Codespaces usando variables de entorno, puerto configurado y rutas básicas de verificación.

## Rutas disponibles
- `/`
- `/saludo`
- `/estado`
- `/api/info`

## Comandos usados
npm init -y
npm install express dotenv
npm start

## Variables de entorno
PORT=3000
APP_NAME=App Comunitaria Semana 9
APP_ENV=development

## Seguridad
El archivo .env no debe subirse al repositorio.
El archivo .gitignore debe incluir:
.env
node_modules/

## Evidencia
La aplicación fue levantada y verificada en navegador.