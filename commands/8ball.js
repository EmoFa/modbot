var options = ["Hello", "Hi", "Hi there"];
var response = options[Math.floor(Math.random()*options.length)];

module.exports = {
    name: '8ball',
    description: "Ask the magic 8ball a question.",
    async execute(message, args){
        if(!args[0]) return message.reply("Please ask a question");

        await message.channel.send(response);
    }
}