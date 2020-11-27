module.exports = {
    name: 'kick',
    description: 'Kicks a member.',
    execute(message, args){
        if(message.member.roles.cache.has('746083488423346316')){
            const member = message.mentions.users.first();
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick();
                message.channel.send('The user has been kicked.');
            } else {
                message.channel.send('Mention a valid user.');
            }
        } else {
            message.reply('did you really think you were allowed to use this?')
        }
        
    }
}