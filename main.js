const Discord = require('discord.js');

//const config = require('./config.json');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

const botversion = ('1.4.2');

client.on('message', msg => {
    if (msg.content.includes("noah")) {
        msg.channel.send("You guys talking about Noah? I miss that guy...");
    }
});

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () =>{
    console.log('ModBot is online!');
    client.user.setActivity('for -', {type: "WATCHING"}).catch(console.error);
});

client.on('guildMemberAdd', guildMemberAdd =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.find(channel => channel.name === 'welcome').send(`Welcome <@${guildMember.user.id}> to our server!`);
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args, client);
    } else if(command === 'youtube'){
        client.commands.get('youtube').execute(message, args);
    } else if(command === 'permissiontest'){
        client.commands.get('permissiontest').execute(message, args);
    } else if(command === 'help'){
        client.commands.get('help').execute(message, args, Discord, botversion);
    } else if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    } else if(command === 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if(command === 'ban'){
        client.commands.get('ban').execute(message, args);
    } else if(command === 'mute'){
        client.commands.get('mute').execute(message, args);
    } else if(command === 'unmute'){
        client.commands.get('unmute').execute(message, args);
    } else if(command === '8ball'){
        client.commands.get('8ball').execute(message, args, Discord, botversion);
    } else if(command === 'info'){
        client.commands.get('info').execute(message, args, Discord, botversion);
    } else if(command === 'code'){
        client.commands.get('code').execute(message, args);
    } else if(command === 'randomnumber'){
        client.commands.get('randomnumber').execute(message, args);
    } else if(command === 'coinflip'){
        client.commands.get('coinflip').execute(message, args, Discord, botversion);
    }
});

client.login(process.env.DJS_TOKEN);