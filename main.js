const Discord = require('discord.js');
//const config = require('./config.json');
const client = new Discord.Client();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
});

client.once('ready', () =>{
    client.user.setActivity('for -', {type: "WATCHING"}).catch(console.error);
});

client.login(process.env.DJS_TOKEN);