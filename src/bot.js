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
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, "commands"));

client.once("ready", () => {
	console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
	client.user.setActivity("with Commando");
});

client.on("error", console.error);
client.login(process.env.DISCORD_BOT_TOKEN);
