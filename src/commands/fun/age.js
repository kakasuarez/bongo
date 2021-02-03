const { Command } = require("discord.js-commando");
const fetch = require("node-fetch");

class AgeCommand extends Command {
	constructor(client) {
		super(client, {
			name: "age",
			group: "fun",
			memberName: "age",
			description: "Returns the estimated age of a name.",
			args: [
				{
					key: "name",
					prompt: "Which name do you want to know the age of?",
					type: "string",
				},
			],
		});
	}

	run(message, { name }) {
		fetch(`https://api.agify.io?name=${name}`)
			.then((res) => res.json())
			.then((json) =>
				message.say(`${name} is approximately ${json.age} years old.`)
			);
	}
}

module.exports = AgeCommand;
