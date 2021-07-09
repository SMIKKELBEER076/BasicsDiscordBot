require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log("Je bot is klaar voor gebruik!")
})

client.login(process.env.BOT_TOKEN);