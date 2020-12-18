module.exports = {
    name: 'leave',
    description: "Stop the music and leave the channel",
    async execute(message, args){
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send("You need to be in a voice channel to use this command.");
        await voiceChannel.leave();
        await message.channel.send("Leaving the voice channel... :smiling_face_with_tear");
    }
}