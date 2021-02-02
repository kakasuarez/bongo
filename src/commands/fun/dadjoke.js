const { Command } = require("discord.js-commando");
const fetch = require("node-fetch");

class DadJokeCommand extends Command {
	constructor(client) {
		super(client, {
			name: "dadjoke",
			group: "fun",
			aliases: ["joke"],
			memberName: "dadjoke",
			description: "Returns a random dad joke.",
		});
	}

	run(message) {
		fetch("https://icanhazdadjoke.com/", {
			headers: {
				Accept: "text/plain",
			},
		})
			.then((res) => res.text())
			.then((body) => message.say(body));
	}
}

module.exports = DadJokeCommand;
