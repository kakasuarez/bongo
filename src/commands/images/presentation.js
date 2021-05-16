const { Command } = require("discord.js-commando");
const { LisaPresentation } = require("discord-image-generation");
const { MessageAttachment } = require("discord.js");

class PresentationCommand extends Command {
	constructor(client) {
		super(client, {
			name: "presentation",
			aliases: ["lisapresentation"],
			group: "images",
			memberName: "presentation",
			description: "Returns a Lisa presentation meme from the given text.",
			args: [
				{
					key: "text",
					prompt:
						"What text do you want to make a Lisa presentation from? Maximum length is 300 characters.",
					type: "string",
					validate: (text) => text.length <= 300,
				},
			],
		});
	}

	async run(message, { text }) {
		const image = await new LisaPresentation().getImage(text);
		const attachment = new MessageAttachment(image);
		message.say(attachment);
	}
}

module.exports = PresentationCommand;
