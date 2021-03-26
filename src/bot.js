require("dotenv").config();
const { CommandoClient } = require("discord.js-commando");
const path = require("path");

const client = new CommandoClient({
	commandPrefix: "--",
	owner: "729566245434687520",
});

client.registry
	.registerDefaultTypes()
	.registerGroups([
		["info", "Information about the bot."],
		["urls", "Shorten or expand urls with Chilp.it."],
		["images", "Image generation."],
		["fun", "Fun commands for when you are bored."],
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, "commands"));

client.on("error", console.error);
client.login(process.env.DISCORD_BOT_TOKEN);
