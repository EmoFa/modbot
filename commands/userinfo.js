module.exports = {
    name: 'userinfo',
    description: "Shows the authors info.",
    execute(message, args, Discord, botversion){
        const userinfoEmbed = new Discord.MessageEmbed()
        .setColor('#6DB6D9')
        .setTitle("__User Information__")
        .setDescription("Here is your user info.")
        .addFields(
            {name: 'Username', vale: message.author.username},
            {name: 'Account Age', vale: message.author.createdAt},
            {name: 'Current Server', vale: message.guild.name}
        )
        .setThumbnail(message.author.avatarUrl)
        .setFooter('Version: ' + botversion)
        .setTimestamp()

        message.channel.send(userinfoEmbed)
    }
}