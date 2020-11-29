module.exports = {
    name: 'code',
    description: "Gives you a link to the GitHub repository.",
    execute(message, args){
        message.channel.send("Here is the GitHub repository link: \nhttps://github.com/SleepDeprived24/modbot");
    }
}