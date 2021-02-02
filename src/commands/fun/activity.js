const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

class ActivityCommand extends Command {
	constructor(client) {
		super(client, {
			name: "activity",
			group: "fun",
			aliases: ["event"],
			memberName: "activity",
			description: "Returns a random activity to do.",
		});
	}

	run(message) {
		fetch("http://www.boredapi.com/api/activity/")
			.then((res) => res.json())
			.then((json) => {
				const embed = new MessageEmbed()
					.setColor("#0099ff")
					.setTitle(json.activity)
					.addFields(
						{ name: "Type", value: json.type, inline: true },
						{ name: "Participants", value: json.participants, inline: true }
					);
				message.embed(embed);
			});
	}
}

module.exports = ActivityCommand;
