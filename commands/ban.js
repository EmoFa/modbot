module.exports = {
    name: 'ban',
    description: 'Bans a member.',
    execute(message, args){
        if(message.member.roles.cache.some(role => role.name === "Mod")){
            const member = message.mentions.users.first();
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();
                message.channel.send(`<@${memberTarget.user.id}> has been banned.`);
            } else {
                message.channel.send('Mention a valid user.');
            }
        } else {
            message.reply('did you really think you were allowed to use this?')
        }
        
    }
}