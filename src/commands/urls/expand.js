const { Command } = require("discord.js-commando");
const fetch = require("node-fetch");

class ExpandCommand extends Command {
	constructor(client) {
		super(client, {
			name: "expand",
			group: "urls",
			aliases: ["expand-url"],
			memberName: "expand",
			description:
				"Expands the shortened chilp.it url and replies with the expanded link.",
			args: [
				{
					key: "url",
					prompt: "Which chilp.it url or id do you want to expand?",
					type: "string",
				},
			],
		});
	}
	run(message, { url }) {
		const id = url.includes("http://chilp.it/") ? url.substring(16) : url;
		fetch(`http://p.chilp.it/api.php?${id}`)
			.then((res) => res.text())
			.then((body) => message.say(body));
	}
}

module.exports = ExpandCommand;
