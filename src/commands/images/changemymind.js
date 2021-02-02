const { Command } = require("discord.js-commando");
const { NekoBot } = require("nekobot-api");

class ChangeMyMindCommand extends Command {
	constructor(client) {
		super(client, {
			name: "changemymind",
			group: "images",
			memberName: "mind",
			description:
				"Creates a change my mind image with the given text using the NekoBot api.",
			args: [
				{
					key: "text",
					prompt: "What text do you want to say?",
					type: "string",
				},
			],
		});
	}

	run(message, { text }) {
		const api = new NekoBot();
		(async () => {
			const image = await api.generate("changemymind", {
				text: text,
			});
			message.say(image);
		})();
	}
}

module.exports = ChangeMyMindCommand;
