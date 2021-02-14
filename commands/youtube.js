module.exports = {
    name: 'youtube',
    permissions: [],
    aliases: ['yt'],
    description: 'The bot will provide you with his youtube channel, if he even has one.',
    execute(client, message, args){
        message.channel.send('i dont have one');
    }
}