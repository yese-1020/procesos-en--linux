console.log("INFO: Aplicacion iniciando...");

console.warn("WARN: Esta es una advertencia de practica.");

console.error("ERROR: Este es un error controlado de practica.");

const configuracion = {
  telegramToken: process.env.TELEGRAM_BOT_TOKEN,
  chatId: process.env.TELEGRAM_CHAT_ID,
};

if (!configuracion.telegramToken) {
  console.error("ERROR: Falta TELEGRAM_BOT_TOKEN en las variables de entorno.");
}

if (!configuracion.chatId) {
  console.error("ERROR: Falta TELEGRAM_CHAT_ID en las variables de entorno.");
}

console.log("INFO: Revision de configuracion finalizada.");