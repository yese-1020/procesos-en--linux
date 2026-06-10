require("dotenv").config();

const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;

console.log("INFO: Iniciando revision de integracion con Telegram...");

if (!token) {
  console.error("ERROR: No se encontro TELEGRAM_BOT_TOKEN.");
  console.error("SUGERENCIA: Verifique el archivo .env sin compartir el token.");
  process.exit(1);
}

if (!chatId) {
  console.error("ERROR: No se encontro TELEGRAM_CHAT_ID.");
  console.error("SUGERENCIA: Verifique el chat ID sin publicarlo en capturas.");
  process.exit(1);
}

console.log("INFO: Configuracion minima encontrada.");
console.log("INFO: Token detectado, pero no se imprimira por seguridad.");
console.log("INFO: Chat ID detectado, pero debe tratarse con cuidado.");
console.log("INFO: La integracion puede continuar a la siguiente prueba.");