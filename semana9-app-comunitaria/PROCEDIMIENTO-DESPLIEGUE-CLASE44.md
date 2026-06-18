# Procedimiento de despliegue y operación básica

## 1. Objetivo
Documentar los pasos necesarios para instalar, configurar, ejecutar, verificar y operar la aplicación Node.js construida durante la Semana 9.

## 2. Entorno de trabajo
- GitHub Codespaces
- Node.js
- npm
- Express
- dotenv
- PM2
- Git

## 3. Requisitos previos
Antes de iniciar, verificar:
- Tener acceso al repositorio.
- Abrir el proyecto en Codespaces.
- Estar ubicado en la carpeta semana9-app-comunitaria.
- Tener Node.js disponible.
- Tener el archivo .env creado localmente.
- No subir .env al repositorio.

## 4. Variables de entorno necesarias
Crear un archivo .env local con la siguiente estructura:

PORT=3000
APP_NAME=App Comunitaria Semana 9
APP_ENV=development
REQUIRE_TELEGRAM=true
TELEGRAM_BOT_TOKEN=PEGAR_TOKEN_DE_PRACTICA_O_VARIABLE_LOCAL

Advertencia: no usar tokens reales en prácticas públicas ni subir este archivo a GitHub.

## 5. Instalación de dependencias
npm install

Si el proyecto se está creando desde cero:
npm install express dotenv
npm install pm2 --save-dev

## 6. Ejecución con Node.js
npm start

Verificar en otra terminal:
curl http://localhost:3000/estado

## 7. Ejecución con PM2
Iniciar:
npx pm2 start server.js --name app-semana9

Listar procesos:
npx pm2 list

Reiniciar:
npx pm2 restart app-semana9

Detener:
npx pm2 stop app-semana9

Revisar logs:
npx pm2 logs app-semana9 --lines 20

Eliminar proceso de PM2 al finalizar práctica:
npx pm2 delete app-semana9

## 8. Rutas de verificación
- /
- /saludo
- /estado
- /api/info
- /diagnostico

## 9. Archivos que no deben subirse
- .env
- *.env
- node_modules/
- uploads/*
- logs/*
- tmp/*

Solo se conservan carpetas vacías mediante .gitkeep.

## 10. Verificación de seguridad antes del commit
git status
git check-ignore -v .env
git check-ignore -v uploads/documento-prueba.txt
git check-ignore -v logs/app.log
git check-ignore -v tmp/temporal.txt

## 11. Registro en Git
git add .
git commit -m "Clase 44 documenta despliegue y protege archivos locales"
git push -u origin clase-44-documentacion-ia-gitignore

## 12. Advertencias
- No publicar tokens.
- No subir .env.
- No subir logs locales.
- No subir archivos cargados por usuarios.
- No pegar credenciales en IA.
- No publicar capturas con secretos.
- Validar todo comando antes de ejecutarlo.