module.exports = {
    name: 'ping',
    description: 'The bot responds with pong.',
    execute(message, args){
        message.channel.send('pong!');
    }
}