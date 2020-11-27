module.exports = {
    name: 'help',
    description: 'The bot will DM you a help embed.',
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#6DB6D9')
        .setTitle('__Commands__')
        .setDescription('Here are the current commands for the bot.')
        .addFields(
            {name: 'help', value: 'This command DMs you the help embed that list all current commands. (the thing you are looking at right now)'},
            {name: 'ping', value: 'The simple ping command most people use as a test command (may be removed in the future unless I actually make it send latency values)'},
            {name: 'youtube', value: 'The bot will send you his youtube channel, if he even has one.'},
            {name: 'permissiontest', value: 'This command has no use (to you atleast). It was made for me to test permission requirement code. (I may also remove this command later as well'}
        )
        .setThumbnail('https://cdn.psychologytoday.com/sites/default/files/field_blog_entry_images/2018-04/help-153094_1280_pixabay_openclipart-vectors.png')

        message.author.send(newEmbed)
    }
}