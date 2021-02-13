module.exports = {
    name: 'ban',
    permissions: ["BAN_MEMBERS"],
    description: 'Bans a member.',
    execute(client, message, args){
            const member = message.mentions.users.first();
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();
                message.channel.send(`<@${memberTarget.user.id}> has been banned.`);
            } else {
                message.channel.send('Mention a valid user.');
            }  
    }
}