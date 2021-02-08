module.exports = (Discord, client, message) =>{
    const prefix = '-';
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    const botversion = ('2.1.3');

    try {
        command.execute(client, message, cmd, args, Discord, botversion);
    } catch (err) {
        message.reply("there was an error trying to execute this command.");
        console.log(err);
    }
}