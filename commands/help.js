module.exports = {
    name: 'help',
    description: "The bot will DM you a help embed.",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#6DB6D9')
        .setTitle('__Moderation__')
        .setDescription('Here are the current moderation commands for the bot.')
        .addFields(
            {name: 'kick', value: "You can use this command to kick a member. \nExample: -kick @Username#1234"},
            {name: 'ban', value: "You can use this command to ban a member. \nExample: -ban @Username#1234"},
            {name: 'mute', value: "You can use this command to mute a member. You can mute them until you decide to unmute them or put them on a timer \nExample: -mute @Username#1234 or -mute @Username#1234 10s (s = seconds, m = minutes, d = days, y = years)"},
            {name: 'unmute', value: "You can use this command to unmute a member. \nExample: -unmute @Username#1234"}
        )
        .setThumbnail('https://i.imgur.com/O3DHIA5.gif')

        message.author.send(newEmbed);
    }
}


//.addFields(
//    {name: 'help', value: 'This command DMs you the help embed that list all current commands. (the thing you are looking at right now)'},
//    {name: 'ping', value: 'The simple ping command most people use as a test command (may be removed in the future unless I actually make it send latency values)'},
//    {name: 'youtube', value: 'The bot will send you his youtube channel, if he even has one.'},
//    {name: 'permissiontest', value: 'This command has no use (to you atleast). It was made for me to test permission requirement code. (I may also remove this command later as well'}
//)