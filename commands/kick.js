module.exports = {
    name: 'kick',
    permissions: ["KICK_MEMBERS"],
    description: 'Kicks a member.',
    execute(client, message, args){
            const member = message.mentions.users.first();
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick();
                message.channel.send(`<@${memberTarget.user.id}> has been kicked.`);
            } else {
                message.channel.send("Mention a valid user.");
            }
    }
}