const Keyv = require('keyv');
const keyv = new Keyv('sqlite://path/to/database.sqlite');

keyv.on('error', err => console.error('Keyv connection error:', err));

module.exports = {
    name: 'prefix',
    description: "Change the prefix for the bot.",
    async execute(message, args){
        if (args.length) {
            await prefixes.set(message.guild.id, args[0]);
            return message.channel.send(`Successfully set prefix to \`${args[0]}\``);
        }
    
        return message.channel.send(`Prefix is \`${await prefixes.get(message.guild.id) || globalPrefix}\``);
    }
}