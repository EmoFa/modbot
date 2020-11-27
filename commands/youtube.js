module.exports = {
    name: 'youtube',
    description: 'The bot will provide you with his youtube channel, if he even has one.',
    execute(message, args){
        message.channel.send('i dont have one');
    }
}