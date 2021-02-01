const { Command } = require("discord.js-commando");
const { NekoBot } = require("nekobot-api");

class TweetCommand extends Command {
	constructor(client) {
		super(client, {
			name: "tweet",
			group: "images",
			memberName: "tweet",
			description:
				"Creates a tweet image with the given username and text using the NekoBot api.",
			args: [
				{
					key: "username",
					prompt: "What username do you want to tweet from?",
					type: "string",
				},
				{
					key: "text",
					prompt: "What text do you want to tweet?",
					type: "string",
				},
			],
		});
	}

	run(message, { username, text }) {
		const api = new NekoBot();
		(async () => {
			const image = await api.generate("tweet", {
				text: text,
				username: username,
			});
			message.say(image);
		})();
	}
}

module.exports = TweetCommand;
