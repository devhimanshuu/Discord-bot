const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  message.reply({
    content: "hi from bot",
  });
});
client.login(
  "MTE5NTMzMjM5NDAxODk0Mjk4Ng.G7LuPc.1n9PfHgxeH7ymAmF11Hz5dMK2unKMe3Wz2E4Ys"
);
