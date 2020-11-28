const { version } = require(botversion);

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
        .setFooter('Version: ' + version)
        .setTimestamp()

        const newEmbed2 = new Discord.MessageEmbed()
        .setColor('#6DB6D9')
        .setTitle('__Utility__')
        .setDescription("Here are the current utility commands for this bot.")
        .addFields(
            {name: 'clear', value: "You can use this command to clear a certain amount of messages. (including the command you sent) \nExample: -clear 10"},
            {name: 'permissiontest', value: "You can use this command to see if the permissions for moderation commands are working. If the permissions are working the bot will respond with 'the code is working', if the permissions are not working the bot will respond with 'the cdoe is not working.' \nIf the bot says the code is not working please tell <@527184387209691147> to fix it."}
        )
        .setFooter('Version: ' + version)
        .setTimestamp()

        const newEmbed3 = new Discord.MessageEmbed()
        .setColor('#6DB6D9')
        .setTitle('__Fun__')
        .setDescription("Here are the current fun commands.")
        .addFields(
            {name: 'ping', value: "Responds with 'pong!'. (may be changed to actually show latency later)"},
            {name: 'youtube', value: "The bot will give you his youtube channel, if he even has one."},
            {name: '8ball', value: "Basic magic 8ball command. \nExample: -8ball Will I have a good day?"}
        )
        .setFooter('Version: ' + version)
        .setTimestamp()

        message.author.send(newEmbed);
        message.author.send(newEmbed2);
        message.author.send(newEmbed3);
        message.react('📬');
        message.channel.send("You've got mail!")
    }
}


//.addFields(
//    {name: 'help', value: 'This command DMs you the help embed that list all current commands. (the thing you are looking at right now)'},
//    {name: 'ping', value: 'The simple ping command most people use as a test command (may be removed in the future unless I actually make it send latency values)'},
//    {name: 'youtube', value: 'The bot will send you his youtube channel, if he even has one.'},
//    {name: 'permissiontest', value: 'This command has no use (to you atleast). It was made for me to test permission requirement code. (I may also remove this command later as well'}
//)

//.setImage('https://i.imgur.com/O3DHIA5.gif')
//.setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcHkaDgLOYmj0KsOTvseK_pYbn4dXnvXmuph13aLzadJ0sMfYbzjkYqNThk-vkB69nGlSU_HQngg&usqp=CAc')