module.exports = {
    name: "balance",
    permissions: [],
    aliases: ["bal", "bl"],
    description: "Check the user balance",
    execute(client, message, cmd, args, Discord, botversion, profileData) {
      message.channel.send(`Your wallet balance is **${profileData.coins}**, you banks balance is **${profileData.bank}**`);
    },
  };