module.exports = {
    name: 'code',
    permissions: [],
    aliases: ['git', 'github', 'repository', 'github repository'],
    description: "Gives you a link to the GitHub repository.",
    execute(client, message, args){
        message.channel.send("Here is the GitHub repository link: \nhttps://github.com/SleepDeprived24/modbot");
    }
}