module.exports = {
    name: '8ball',
    description: "Ask the magic 8ball a question.",
    async execute(client, message, args, Discord, botversion){
        var options = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes – definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];
        var response = options[Math.floor(Math.random()*options.length)];

        if(!args[0]) return message.reply("please ask a question");

        const magic8ballEmbed = new Discord.MessageEmbed()
        .setColor('#6DB6D9')
        .setTitle(response)
        .setImage('https://www.horoscope.com/images-US/games/game-magic-8-ball-no-text.png')
        .setFooter('Version: ' + botversion)
        .setTimestamp()

        await message.channel.send(magic8ballEmbed);
    }
}