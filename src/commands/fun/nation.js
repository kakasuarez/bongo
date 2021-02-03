const { Command } = require("discord.js-commando");
const fetch = require("node-fetch");

class NationCommand extends Command {
	constructor(client) {
		super(client, {
			name: "nation",
			group: "fun",
			memberName: "nation",
			description: "Returns the estimated nation of a name.",
			args: [
				{
					key: "name",
					prompt: "Which name do you want to know the nation of?",
					type: "string",
				},
			],
		});
	}

	run(message, { name }) {
		fetch(`https://api.nationalize.io/?name=${name}`)
			.then((res) => res.json())
			.then((json) =>
				message.say(
					`${name} is ${(json.country[0].probability * 100).toFixed(2)}% from ${
						json.country[0].country_id
					}.`
				)
			);
	}
}

module.exports = NationCommand;
