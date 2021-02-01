const { Command } = require("discord.js-commando");

class GitHubCommand extends Command {
	constructor(client) {
		super(client, {
			name: "github",
			group: "info",
			memberName: "repository",
			description: "Replies with a link to the GitHub repository of the bot.",
		});
	}

	run(message) {
		return message.say("https://github.com/kakasuarez/bongo");
	}
}

module.exports = GitHubCommand;
