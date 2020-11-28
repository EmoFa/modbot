var options = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes – definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];
var response = options[Math.floor(Math.random()*options.length)];

module.exports = {
    name: '8ball',
    description: "Ask the magic 8ball a question.",
    async execute(message, args, Discord, botversion){
        if(!args[0]) return message.reply("Please ask a question");

        const magic8ballEmbed = new Discord.MessageEmbed()
        .setColor('#6DB6D9')
        .setTitle(response)
        .setFooter('Version: ' + botversion)
        .setTimestamp()

        await message.channel.send(magic8ballEmbed);
    }
}