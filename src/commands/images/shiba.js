const { Command } = require("discord.js-commando");
const fetch = require("node-fetch");

class ShibaCommand extends Command {
	constructor(client) {
		super(client, {
			name: "shiba",
			group: "images",
			aliases: ["inu"],
			memberName: "shiba",
			description: "Returns random images of Shiba Inu dogs.",
			args: [
				{
					key: "count",
					prompt: "How many images do you want?",
					type: "string",
					default: "1",
				},
			],
		});
	}

	run(message, { count }) {
		fetch(`http://shibe.online/api/shibes?count=${count}`)
			.then((res) => res.json())
			.then((json) => {
				json.forEach((image) => {
					message.say(image);
				});
			});
	}
}

module.exports = ShibaCommand;
