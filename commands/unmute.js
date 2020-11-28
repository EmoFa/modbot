module.exports = {
    name: 'unmute',
    description: 'Unmutes a member.',
    execute(message, args){
        const target = message.metions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === "Member");
            let muteRole = message.guild.roles.cache.find(role => role.name === "Muted");

            let memberTarget = message.guid.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted.`);
        } else {
            message.channel.send("Mention a valid user.");
        }
    }
}