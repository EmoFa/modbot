module.exports = {
    name: 'unmute',
    permissions: ["MANAGE_ROLES"],
    description: 'Unmutes a member.',
    execute(client, message, args){
        const target = message.mentions.users.first();
           if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === "Member");
            let muteRole = message.guild.roles.cache.find(role => role.name === "Muted");

            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted.`);
        } else {
            message.channel.send("Mention a valid user.");
        } 
    }
}