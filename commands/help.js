module.exports = {
    name: 'help',
    description: "The bot will DM you a help embed.",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#6DB6D9')
        .setTitle('__Moderation__')
        .setDescription('Here are the current moderation commands for this bot.')
        .addFields(
            {name: 'kick', value: "You can use this command to kick a member. \nExample: -kick @Username#1234"},
            {name: 'ban', value: "You can use this command to ban a member. \nExample: -ban @Username#1234"},
            {name: 'mute', value: "You can use this command to mute a member. You can mute them until you decide to unmute them or put them on a timer \nExample: -mute @Username#1234 or -mute @Username#1234 10s (s = seconds, m = minutes, d = days, y = years)"},
            {name: 'unmute', value: "You can use this command to unmute a member. \nExample: -unmute @Username#1234"}
        )
        .setImage('https://i.imgur.com/O3DHIA5.gif')

        const newEmbed2 = new Discord.MessageEmbed()
        .setColor('#6DB6D9')
        .setTitle('__Utility__')
        .setDescription('Here are the current utility commands for this bot.')
        .addFields(
            {name: 'clear', value: "You can use this command to clear a certain amount of messages. (including the command you sent) \nExample: -clear 10"}
        )
        .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcHkaDgLOYmj0KsOTvseK_pYbn4dXnvXmuph13aLzadJ0sMfYbzjkYqNThk-vkB69nGlSU_HQngg&usqp=CAc')

        message.author.send(newEmbed);
        message.author.send(newEmbed2);
        message.react('✅');
    }
}


//.addFields(
//    {name: 'help', value: 'This command DMs you the help embed that list all current commands. (the thing you are looking at right now)'},
//    {name: 'ping', value: 'The simple ping command most people use as a test command (may be removed in the future unless I actually make it send latency values)'},
//    {name: 'youtube', value: 'The bot will send you his youtube channel, if he even has one.'},
//    {name: 'permissiontest', value: 'This command has no use (to you atleast). It was made for me to test permission requirement code. (I may also remove this command later as well'}
//)