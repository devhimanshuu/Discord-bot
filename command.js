const { REST, Routes } = require("discord.js");
const commands = [
  {
    name: "create",
    description: "Creates a new short url",
  },
];
const rest = new REST({ version: "10" }).setToken(
  "MTE5NTMzMjM5NDAxODk0Mjk4Ng.G47v4p.UjOqW-W3FeXgXJCkX2wKRwbyBn62SCp1EHWIbk"
);

async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(1195332394018942986), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
};
