const { GuildMember } = require("discord.js")

module.exports = {
    name: 'permissiontest',
    description: 'command to test permission requirement code.',
    execute(message, args){
        if(message.member.roles.cache.has('746083488423346316')){
            message.channel.send('the code is working')

        } else {
            message.channel.send('the code is not working')
        }
        
    }
}