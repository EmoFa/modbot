module.exports = {
    name: 'invite',
    permissions: [],
    aliases: ['inv'],
    description: "Gives you a link to the GitHub repository.",
    execute(client, message, args){
        message.channel.send("Here is the GitHub repository link: \nhttps://discord.com/oauth2/authorize?client_id=781277029910839338&scope=bot&permissions=2147483391");
    }
}