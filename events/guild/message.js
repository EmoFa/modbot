module.exports = (Discord, client, message) =>{
    const prefix = '-';
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd);

    const botversion = ('2.0.7');

    if(command)command.execute(client, message, args, Discord, botversion);
}