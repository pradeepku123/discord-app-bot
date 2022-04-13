import { Routes } from "discord-api-types/v9";
import { REST } from "@discordjs/rest";
import { SlashCommandBuilder } from "@discordjs/builders";
import config from "./config";
const commands = [
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Yes Sir!"),
];

const rest = new REST({ version: "9" }).setToken(config.DISCORD_TOKEN);

rest
  .put(Routes.applicationGuildCommands(config.CLIENT_ID, config.GUILD_ID), {
    body: commands,
  })
  .then(() => {
    console.log("Sucessfully Registed Application commands.");
  })
  .catch(console.error);
