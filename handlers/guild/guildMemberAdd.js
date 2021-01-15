module.exports = (client, message, Discord) =>{
    client.on('guildMemberAdd', guildMemberAdd =>{
        let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');
    
        guildMember.roles.add(welcomeRole);
        guildMember.guild.channels.cache.find(channel => channel.name === 'welcome').send(`Welcome <@${guildMember.user.id}> to our server!`);
    });
}