const { Command } = require("discord.js-commando");
const colours = require("../../../assets/json/reddit_avatars.json");

class RedditAvatarCommand extends Command {
	constructor(client) {
		super(client, {
			name: "redditavatar",
			group: "images",
			aliases: ["reddit_avatar", "reddit"],
			memberName: "redditavatar",
			description: "Returns a default reddit profile picture.",
			args: [
				{
					key: "style",
					prompt: "Which snoo style do you want to see? Choose from 01 to 20.",
					type: "string",
					oneOf: Array(20)
						.fill(1)
						.map((x, y) => x + y)
						.map((i) => {
							if (i < 10) return "0" + i.toString();
							else return i.toString();
						}),
				},
				{
					key: "colour",
					prompt:
						"Which colour do you want to see? Choose from gray, brown, orange, yellow, green, blue, purple, pink.",
					type: "string",
					oneOf: colours.map((c) => c.colour),
				},
				{
					key: "version",
					prompt:
						"Which version of the colour do you want to see? Available versions: gray, brown, orange, purple, pink, red: 2, yellow: 3, green: 4, blue: 6.",
					type: "integer",
				},
			],
		});
	}

	run(message, { style, colour, version }) {
		const chosen_variant = colours.find((c) => c.colour == colour).versions[
			version - 1
		];
		message.say(
			`https://www.redditstatic.com/avatars/avatar_default_${style}_${chosen_variant}.png`
		);
	}
}

module.exports = RedditAvatarCommand;
