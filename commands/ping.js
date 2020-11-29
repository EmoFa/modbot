module.exports = {
    name: 'ping',
    description: 'The bot responds with pong.',
    execute(message, args){
        client.on('message', message => {
            if (message.content === '+ping') {  
              message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
            }
          });
    }
}