module.exports = {
    name: 'userinfo',
    description: "Shows the authors info.",
    execute(message, args, Discord, botversion){
        const user = message.mentions.users.first() || message.member.user;
        const member = message.guild.members.cache.get(user.id);

        const userinfoEmbed = new Discord.MessageEmbed()
        .setColor('#6DB6D9')
        .setTitle("__User Information__")
        .setDescription("Here is your user info.")
        .addFields(
            {name: 'Username', vale: user.tag},
            {name: 'Is Bot', vale: user.bot},
            {name: 'Joined Server', vale: new Date(member.joinedTimestamp).toLocaleDateString()},
            {name: 'Joined Discord', vale: new Date(user.createdTimestamp).toLocaleDateString()},
            {name: 'Roles', vale: member.roles.cache.size - 1}
        )
        .setThumbnail(message.author.displayavatarUrl())
        .setFooter('Version: ' + botversion)
        .setTimestamp()

        message.channel.send(userinfoEmbed)
    }
}