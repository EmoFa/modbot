module.exports = {
    name: "balance",
    permissions: [],
    aliases: ["bal", "bl"],
    description: "Check the user balance",
    execute(client, message, cmd, args, Discord, botversion, profileData) {
      message.channel.send(`Your wallet bal is ${profileData.coins}, you banks bal is ${profileData.bank}`);
    },
  };