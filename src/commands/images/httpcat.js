const { Command } = require("discord.js-commando");

class HTTPCatCommand extends Command {
	constructor(client) {
		super(client, {
			name: "httpcat",
			group: "images",
			memberName: "http",
			description: "Returns a cat image for the specified HTTP status code.",
			args: [
				{
					key: "code",
					prompt: "Which HTTP status code do you want the cat of?",
					type: "string",
				},
			],
		});
	}

	run(message, { code }) {
		message.say(`https://http.cat/${code}.jpg`);
	}
}

module.exports = HTTPCatCommand;
