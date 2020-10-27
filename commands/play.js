const ytdl = require('ytdl-core');
const ytsrch = require('youtube-sr');

module.exports = {
    name: 'play',
    description: 'plays music on channel',
    async execute(msg, args) {
        // if (msg.member.voice.channel) {
        //     const channel = await msg.member.voice.channel;
        //     const music = args[0];

        //     channel.join().then(connection => {
        //         const stream = ytdl(music, {
        //             filter: 'audioonly'
        //         });
        //         const dispatcher = connection.play(stream);

        //         dispatcher.on('finish', () => channel.leave());
        //     }).catch(err => {
        //         console.log(err);
        //     });

        // } else {
        //     msg.reply('You have to join a voice channel!');
        // }

    }
}