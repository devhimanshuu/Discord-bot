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
  if (message.content.startsWith("create")) [1];
  return message.reply({ content: "generating short id for " + url });
});
message.reply({
  content: "hi from bot",
});
client.login(
  "MTE5NTMzMjM5NDAxODk0Mjk4Ng.G47v4p.UjOqW-W3FeXgXJCkX2wKRwbyBn62SCp1EHWIbk"
);

client.on("interactionCreate", (interaction) => {
  console.log(interaction);
  interaction.reply("pong");
});
