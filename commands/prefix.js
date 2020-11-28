const Keyv = require('keyv');
const keyv = new Keyv('sqlite://path/to/database.sqlite');
const prefixes = new Keyv('sqlite://path/to.sqlite');

keyv.on('error', handleConnectionError);

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