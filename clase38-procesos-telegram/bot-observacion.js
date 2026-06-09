require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");

const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;
if (!token) {
  console.error("Falta TELEGRAM_BOT_TOKEN en el archivo .env");
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

console.log("Bot en modo observacion. El proceso esta corriendo.");

bot.on("message", async (msg) => {
  console.log("Mensaje recibido:", msg.text);
  if(msg.text =='hola')
     try {
    await bot.sendMessage(
      chatId,
      "hola como estan?."
    );

    console.log("Mensaje enviado correctamente a Telegram.");
  } catch (error) {
    console.error("Error al enviar mensaje:", error.message);
  }
});