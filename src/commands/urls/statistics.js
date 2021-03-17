const { Command } = require("discord.js-commando");
const fetch = require("node-fetch");

class StatisticsCommand extends Command {
	constructor(client) {
		super(client, {
			name: "statistics",
			group: "urls",
			aliases: ["clicks"],
			memberName: "clicks",
			description:
				"Gives the number of times somebody has clicked the given chilp.it url.",
			args: [
				{
					key: "url",
					prompt:
						"Which chilp.it url or id do you want to see the statistics for?",
					type: "string",
				},
			],
		});
	}
	run(message, { url }) {
		const id = url.includes("http://chilp.it/") ? url.substring(16) : url;
		fetch(` http://s.chilp.it/api.php?${id}`)
			.then((res) => res.text())
			.then((body) => message.say(body));
	}
}

module.exports = StatisticsCommand;
