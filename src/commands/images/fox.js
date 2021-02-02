const { Command } = require("discord.js-commando");
const fetch = require("node-fetch");

class FoxCommand extends Command {
	constructor(client) {
		super(client, {
			name: "fox",
			group: "images",
			aliases: ["floof"],
			memberName: "fox",
			description: "Returns a random image of a fox.",
		});
	}

	run(message) {
		fetch("https://randomfox.ca/floof/")
			.then((res) => res.json())
			.then((json) => message.say(json.image));
	}
}

module.exports = FoxCommand;
