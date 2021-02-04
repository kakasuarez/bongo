const { Command } = require("discord.js-commando");
const fetch = require("node-fetch");

class CatFactCommand extends Command {
	constructor(client) {
		super(client, {
			name: "catfact",
			group: "fun",
			memberName: "catfact",
			description: "Gets a random cat fact.",
		});
	}

	run(message) {
		fetch("https://cat-fact.herokuapp.com/facts/random")
			.then((res) => res.json())
			.then((json) => message.say(json.text));
	}
}

module.exports = CatFactCommand;
