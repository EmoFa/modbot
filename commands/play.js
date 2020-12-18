const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');

module.exports = {
    name: 'play',
    description: "Play a song from YouTube",
    async execute(message, args){
        const voiceChannel = message.member.voice.channel;

        if(!voiceChannel) return message.channel.send("You need to be in a voice channel to use this command.");
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if(!permissions.has('CONNECT')) return message.channel.send("You don't have the required to permissions to use this command.");
        if(!permissions.has('SPEAK')) return message.channel.send("You don't have the required to permissions to use this command.");
        if(!args.length) return message.channel.send("You need to specify what song you want.");

        const conneection = await voiceChannel.join();

        const vioeoFinder = async (query) =>{
            const videoResult = await ytSearch(query);

            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
        }

        const video = await videoFinder(args.join(' '));
        if(video){
            const stream = ytdl(video.url, {filter: 'audioonly'});
            conneection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave();
            });

            await message.reply(`👍 Now Playing ***${video.title}***`)
        } else {
            message.channel.send("No video results found.");
        }
    }
}