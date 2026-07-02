# Procedimiento de despliegue y operación básica

## 1. Objetivo
Este documento explica cómo instalar, configurar, ejecutar y administrar la aplicación Node.js desarrollada durante la Semana 9 de forma segura.

## 2. Herramientas necesarias
- GitHub Codespaces (ambiente de práctica)
- Node.js (entorno de ejecución)
- npm (gestor de paquetes)
- Express (marco web)
- dotenv (gestor de variables)
- PM2 (gestor de procesos)
- Git (control de versiones)

## 3. Preparación inicial
Antes de comenzar, asegurate de:
- Tener acceso al repositorio en GitHub.
- Abrir el proyecto en Codespaces.
- Navegar a la carpeta `semana9-app-comunitaria`.
- Verificar que Node.js esté disponible en el terminal.
- Crear un archivo `.env` en tu máquina local (no en Git).
- **Recordar**: nunca subir `.env` a GitHub.

## 4. Configuración de variables de entorno
Crea un archivo `.env` en la carpeta `semana9-app-comunitaria` con las siguientes líneas:

```
PORT=3000
APP_NAME=App Comunitaria Semana 9
APP_ENV=development
REQUIRE_TELEGRAM=true
TELEGRAM_BOT_TOKEN=tu_token_de_practica_aqui
```

**Instrucciones de seguridad:**
- Usa un token de prueba, no uno real.
- Nunca compartas este archivo.
- Git ignora automáticamente este archivo (`.gitignore` ya está configurado).

## 5. Instalación de dependencias
Ejecuta:
```bash
npm install
```

Si estás creando el proyecto desde cero, instala también:
```bash
npm install express dotenv
npm install pm2 --save-dev
```

**¿Qué hace?** Descarga y prepara todas las librerías necesarias para que la aplicación funcione.

## 6. Ejecución con npm start (desarrollo)
Inicia la aplicación:
```bash
npm start
```

Para verificar que funciona, abre **otra terminal** y ejecuta:
```bash
curl http://localhost:3000/estado
```

**Detener la aplicación:** Presiona `Ctrl+C` en el terminal donde está corriendo.

## 7. Ejecución con PM2 (administración de procesos)
PM2 permite ejecutar la aplicación en segundo plano y reiniciarla automáticamente.

**Iniciar la aplicación:**
```bash
npx pm2 start server.js --name app-semana9
```

**Ver todos los procesos activos:**
```bash
npx pm2 list
```

**Reiniciar la aplicación:**
```bash
npx pm2 restart app-semana9
```

**Detener la aplicación:**
```bash
npx pm2 stop app-semana9
```

**Ver últimas 20 líneas del registro:**
```bash
npx pm2 logs app-semana9 --lines 20
```

**Eliminar proceso (cuando termines):**
```bash
npx pm2 delete app-semana9
```

## 8. Rutas disponibles para probar
Una vez que la aplicación está ejecutándose, puedes acceder a:
- `http://localhost:3000/` — Página principal
- `http://localhost:3000/saludo` — Saludo personalizado
- `http://localhost:3000/estado` — Estado de la aplicación
- `http://localhost:3000/api/info` — Información técnica
- `http://localhost:3000/diagnostico` — Verificación de diagnostico

## 9. Archivos que Git NO debe subir
Los siguientes archivos y carpetas están protegidos en `.gitignore` (Git los ignora automáticamente):

| Archivo/Carpeta | Razón |
|---|---|
| `.env` | Contiene variables sensibles |
| `node_modules/` | Se genera con `npm install` |
| `uploads/*` | Archivos cargados por usuarios |
| `logs/*` | Registros locales de ejecución |
| `tmp/*` | Archivos temporales |

**Nota:** Las carpetas `uploads/`, `logs/` y `tmp/` tienen un archivo `.gitkeep` para que Git las reconozca como carpetas vacías.

## 10. Verificación de seguridad antes de subir a GitHub
Antes de hacer `git push`, verifica que Git está ignorando los archivos sensibles:

```bash
git status
```

Debería verse limpio (sin `.env`, `uploads/`, `logs/`, etc.).

Para verificar específicamente:
```bash
git check-ignore -v .env
git check-ignore -v uploads/documento-prueba.txt
git check-ignore -v logs/app.log
git check-ignore -v tmp/temporal.txt
```

Si todas las respuestas son afirmativas, tu configuración está segura.

## 11. Subiendo cambios a GitHub
Una vez que todo está configurado y probado:

```bash
git add .
git commit -m "Clase 44: Documenta despliegue y protege archivos sensibles"
git push -u origin clase-44-documentacion-ia-gitignore
```

**¿Qué hace cada comando?**
- `git add .` — Prepara todos los cambios
- `git commit -m "mensaje"` — Guarda los cambios localmente con un mensaje descriptivo
- `git push -u origin rama` — Envía los cambios a GitHub

## 12. Advertencias de seguridad importantes
✅ **NUNCA hagas esto:**
- ❌ Publicar tokens o claves en GitHub
- ❌ Subir el archivo `.env` al repositorio
- ❌ Subir logs locales o archivos temporales
- ❌ Pegar credenciales en consultas a IA
- ❌ Compartir capturas de pantalla que muestren secretos

✅ **SIEMPRE haz esto:**
- ✔ Usa tokens de prueba en desarrollo
- ✔ Verifica `git status` antes de hacer push
- ✔ Revisa `.gitignore` regularmente
- ✔ Valida todos los comandos antes de ejecutarlos
- ✔ Mantén `.env` en tu máquina local únicamente