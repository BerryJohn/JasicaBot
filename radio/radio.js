const ytdl = require('ytdl-core');
const ytsrch = require('youtube-sr');

const ytURL = url => {
    const pattern = new RegExp(/^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/);
    return pattern.test(url);
}

const ytSearch = async msg => {
    return ytsrch.search(msg, {
            limit: 1
        })
        .then(res => res[0].id)
        .catch(err => console.log(err));
}

module.exports = {
    name: 'radio',
    description: '',
    async execute(msg, args) {
        let music;
        if (ytURL(msg) && args.length == 1) {
            //youtube URL
            music = String(msg);
            msg.reply('yt');
        } else {
            let id = await ytSearch(String(msg));
            music = `www.youtube.com/watch?v=${id}`;
        }

        if (msg.member.voice.channel) {
            const channel = await msg.member.voice.channel;

            channel.join().then(connection => {
                const stream = ytdl(music, {
                    filter: 'audioonly'
                });
                const dispatcher = connection.play(stream);

                dispatcher.on('finish', () => channel.leave());
            }).catch(err => console.log(err));

        } else {
            msg.reply('You have to join a voice channel!');
        }

    }
}