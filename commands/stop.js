const Discord = require('discord.js');

const client = new Discord.Client();

const { Player } = require("discord-player");
// Create a new Player (you don't need any API Key)
const player = new Player(client);
// To easily access the player
client.player = player;

module.exports = {
    name: 'stop',
    description: "Stop songs from playing in a voice channel.",
    async execute(message, args, client){
        let track = await client.player.stop(message.guild.id);
        message.channel.send(`🛑 ***Stopped***`);
    }
}