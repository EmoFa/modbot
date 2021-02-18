const Discord = require('discord.js');
//const config = require('./config.json');
const client = new Discord.Client();
const mongoose = new require('mongoose');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
});

client.once('ready', () =>{
    client.user.setActivity('for -', {type: "WATCHING"}).catch(console.error);
});

mongoose.connect(process.env.MONOGDB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('Connected to the database.');
}).catch((err) => {
    console.log(err);
});

client.login(process.env.DJS_TOKEN);
//DiscordBotDB