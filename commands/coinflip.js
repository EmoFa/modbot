module.exports = {
    name: 'coinflip',
    description: "Flip a coin and see what you get.",
    execute(client, message, args, Discord, botversion){
        const headsEmbed = new Discord.MessageEmbed()
        .setColor('#6DB6D9')
        .setTitle("You got heads!")
        .setImage('https://random-ize.com/coin-flip/canada-25-cent/canada-25-cent-front.png')
        .setFooter('Version: ' + botversion)
        .setTimestamp()

        const tailsEmbed = new Discord.MessageEmbed()
        .setColor('#6DB6D9')
        .setTitle("You got tails!")
        .setImage('https://random-ize.com/coin-flip/canada-25-cent/canada-25-cent-back.png')
        .setFooter('Version: ' + botversion)
        .setTimestamp()

        var options = [headsEmbed, tailsEmbed];
        var response = options[Math.floor(Math.random()*options.length)];
        
        message.channel.send(response);
    }
}