module.exports = {
    name: 'randomnumber',
    description: "Sends a random number between 1 and 100.",
    execute(message, args){
        message.channel.send(Math.floor(Math.random() * 100));
    }
}