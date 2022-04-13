import { Client } from "discord.js";
import config from "./config";
export const client = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"],
});

client.once("ready", () => {
  console.log("Discord Helper Bot Ready");
});

client.on("interaction", async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }
  const { commandName } = interaction;
  if (commandName === "ping") {
    return interaction.reply("Yes Pleace");
  }
});

client.login(config.DISCORD_TOKEN);
