const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

class WordCommand extends Command {
	constructor(client) {
		super(client, {
			name: "word",
			group: "fun",
			aliases: ["randomword"],
			memberName: "word",
			description:
				"Returns a random word with its definition and pronunciation.",
		});
	}

	run(message) {
		fetch("https://random-words-api.vercel.app/word")
			.then((res) => res.json())
			.then((json) => {
				const word = json[0];
				const embed = new MessageEmbed()
					.setColor("#0099ff")
					.setTitle(word.word)
					.addFields(
						{ name: "Definition", value: word.definition, inline: true },
						{ name: "Pronunciation", value: word.pronunciation, inline: true }
					);
				message.embed(embed);
			});
	}
}

module.exports = WordCommand;
