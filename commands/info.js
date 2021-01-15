module.exports = {
    name: 'info',
    description: "Shows info about the bot.",
    execute(client, message, args, Discord, botversion){
        const infoEmbed = new Discord.MessageEmbed()
        .setColor('#6DB6D9')
        .setTitle('__Information__')
        .setDescription('Here is some information about me.')
        .addFields(
            {name: '>_ Coded In', value: "JavaScript"},
            {name: 'Developed By', value: "<@527184387209691147>"},
            {name: 'Bot Purpose', value: "As you can tell by the name, I was originally made for moderation. Although this is still my main main focus, there are some other fun commands to use. Use the help command to see them all."},
            {name: 'Invite Link', value: "You can use this link to invite me to other servers, https://discord.com/oauth2/authorize?client_id=781277029910839338&scope=bot&permissions=2147483391"}
        )
        .setFooter('Version: ' + botversion)
        .setTimestamp()

        message.author.send(infoEmbed);
        message.react('📬');
        message.channel.send("You've got mail!");
    }
}