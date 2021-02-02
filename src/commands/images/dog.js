const { Command } = require("discord.js-commando");
const fetch = require("node-fetch");

class DogCommand extends Command {
	constructor(client) {
		super(client, {
			name: "dog",
			group: "images",
			aliases: "woof",
			memberName: "dog",
			description: "Returns a random image of a dog.",
		});
	}

	run(message) {
		fetch("https://random.dog/woof.json")
			.then((res) => res.json())
			.then((json) => message.say(json.url));
	}
}

module.exports = DogCommand;
