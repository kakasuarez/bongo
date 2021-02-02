const { Command } = require("discord.js-commando");
const fetch = require("node-fetch");

class FoodCommand extends Command {
	constructor(client) {
		super(client, {
			name: "food",
			group: "images",
			memberName: "food",
			description: "Returns a random image of a food dish.",
		});
	}

	run(message) {
		fetch("https://foodish-api.herokuapp.com/api/")
			.then((res) => res.json())
			.then((json) => message.say(json.image));
	}
}

module.exports = FoodCommand;
