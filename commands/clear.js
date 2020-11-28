module.exports = {
    name: 'clear',
    description: 'Delete a certain amount of messages in a channel.',
    async execute(message, args){
        if(!args[0]) return message.reply("please enter the amount of messages you want to clear.");

        if(isNaN(args[0])) return message.reply('please enter a real number.');

        if(args[0] > 100) return message.reply('you cannot delete more than 100 messages.');

        if(args[0] < 1) return message.reply('you must delete at least one message.');

        await message.channel.messages.fetch({ limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
        });
    }
}