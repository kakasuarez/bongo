const { MessageEmbed } = require("discord.js");
const { Command } = require("discord.js-commando");
const fetch = require("node-fetch");

class AnimeMusicCommand extends Command {
	constructor(client) {
		super(client, {
			name: "animemusic",
			group: "fun",
			memberName: "animemusic",
			description: "Searches for official anime music on spotify.",
			throttling: {
				usages: 3,
				duration: 20,
			},
			args: [
				{
					key: "query",
					prompt: "What anime music do you want to search for?",
					type: "string",
				},
			],
		});
	}

	run(message, { query }) {
		fetch("https://animusicapi.herokuapp.com/?query=" + query.replace(" ", "-"))
			.then((res) => res.json())
			.then((json) => {
				if (json.playlists.length) {
					json.playlists.forEach((playlist) => {
						const embed = new MessageEmbed()
							.setColor("#0099ff")
							.setTitle(playlist.anime)
							.addFields(
								{ name: "kind", value: playlist.kind, inline: true },
								{ name: "user URL", value: playlist.user_url, inline: true },
								{ name: "URL", value: playlist.url }
							);
						message.embed(embed);
						message.say(playlist.url);
					});
				} else {
					json.songs.forEach((song) => {
						const embed = new MessageEmbed()
							.setColor("#0099ff")
							.setTitle(song.anime)
							.addFields(
								{ name: "kind", value: song.kind, inline: true },
								{ name: "Artist URL", value: song.user_url, inline: true },
								{ name: "URL", value: song.url }
							);
						message.embed(embed);
						message.say(song.url);
					});
				}
			});
	}
}

module.exports = AnimeMusicCommand;
