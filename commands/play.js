const Discord = require('discord.js');

const client = new Discord.Client();

const { Player } = require("discord-player");
// Create a new Player (you don't need any API Key)
const player = new Player(client);
// To easily access the player
client.player = player;

module.exports = {
    name: 'play',
    description: "Play a song in a voice channel.",
    async execute(message, args, client){
        let track = await client.player.play(message.member.voice.channel, args[0], message.member.user.tag);
        message.channel.send(`Currently playing ${track.name}! - Requested by ${track.requestedBy}`);
    }
}