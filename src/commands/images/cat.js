const { Command } = require("discord.js-commando");
const fetch = require("node-fetch");

class CatCommand extends Command {
	constructor(client) {
		super(client, {
			name: "cat",
			group: "images",
			aliases: ["meow"],
			memberName: "cat",
			description: "Returns a random image of a cat.",
		});
	}

	run(message) {
		fetch("https://aws.random.cat/meow")
			.then((res) => res.json())
			.then((json) => message.say(json.file));
	}
}

module.exports = CatCommand;
