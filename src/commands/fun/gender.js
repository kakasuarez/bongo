const { Command } = require("discord.js-commando");
const fetch = require("node-fetch");

class GenderCommand extends Command {
	constructor(client) {
		super(client, {
			name: "gender",
			group: "fun",
			memberName: "gender",
			description: "Returns the estimated gender of a name.",
			args: [
				{
					key: "name",
					prompt: "Which name do you want to know the gender of?",
					type: "string",
				},
			],
		});
	}

	run(message, { name }) {
		fetch(`https://api.genderize.io?name=${name}`)
			.then((res) => res.json())
			.then((json) =>
				message.say(
					`${name} is ${(json.probability * 100).toFixed(2)}% ${json.gender}.`
				)
			);
	}
}

module.exports = GenderCommand;
