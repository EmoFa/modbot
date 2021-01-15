const { GuildMember } = require("discord.js")

module.exports = {
    name: 'permissiontest',
    description: 'command to test permission requirement code.',
    execute(client, message, args){
        if(message.member.roles.cache.some(role => role.name === "Mod")){
            message.channel.send('the code is working')

        } else {
            message.channel.send('the code is not working')
        }
        
    }
}