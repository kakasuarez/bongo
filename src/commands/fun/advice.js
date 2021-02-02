const { Command } = require("discord.js-commando");
const fetch = require("node-fetch");

class AdviceCommand extends Command {
	constructor(client) {
		super(client, {
			name: "advice",
			group: "fun",
			memberName: "advice",
			description: "Returns a random piece of advice.",
		});
	}

	run(message) {
		fetch("https://api.adviceslip.com/advice")
			.then((res) => res.json())
			.then((json) => message.say(json.slip.advice));
	}
}

module.exports = AdviceCommand;
