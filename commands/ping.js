module.exports = {
    name: 'ping',
    permissions: [],
    aliases: ['latency'],
    description: 'The bot responds with pong.',
    execute(client, message, args){
        message.channel.send(`🏓 Latency is **${Date.now() - message.createdTimestamp}ms.** API Latency is **${Math.round(client.ws.ping)}ms.**`);
    }
}