const { Command } = require("discord.js-commando");
const { MessageAttachment } = require("discord.js");
const { Color } = require("discord-image-generation");

class ColorCommand extends Command {
	constructor(client) {
		super(client, {
			name: "color",
			group: "images",
			aliases: ["colour"],
			memberName: "color",
			description: "Sends an image of the color of the given hex value.",
			args: [
				{
					key: "hex",
					prompt: "Which hex do you want to see the color of?",
					type: "string",
					validate: (text) => /^(#)((?:[A-Fa-f0-9]{3}){1,2})$/.test(text),
				},
			],
		});
	}

	async run(message, { hex }) {
		const image = await new Color().getImage(hex);
		const attachment = new MessageAttachment(image);
		message.say(attachment);
	}
}

module.exports = ColorCommand;
