const { Command } = require("discord.js-commando");
const fetch = require("node-fetch");

class ShortenCommand extends Command {
	constructor(client) {
		super(client, {
			name: "shorten",
			group: "urls",
			aliases: ["shorten-url"],
			memberName: "shorten",
			description:
				"Shortens the given url and replies with the shortened link.",
			args: [
				{
					key: "url",
					prompt: "Which url do you want to shorten?",
					type: "string",
				},
			],
		});
	}
	run(message, { url }) {
		fetch(`http://chilp.it/api.php?url=${url}`)
			.then((res) => res.text())
			.then((body) => message.say(body));
	}
}

module.exports = ShortenCommand;
