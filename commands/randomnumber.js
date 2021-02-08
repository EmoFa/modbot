module.exports = {
    name: 'randomnumber',
    aliases: ['rn'],
    description: "Sends a random number between 1 and 100.",
    execute(client, message, args){
        message.channel.send(Math.floor(Math.random() * 100));
    }
}