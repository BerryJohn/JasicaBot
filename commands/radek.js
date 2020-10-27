const fetch = require('node-fetch');
const Discord = require('discord.js');

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {
    name: 'radek',
    description: 'MonsterGirl NFSW',
    execute(msg, args) {
        const link = `https://www.reddit.com/r/monstergirl.json?limit=100&t=sort=top&t=day`;


        fetch(link).then((res) => {
                return res.json();
            }).then((dataReddit) => {
                const random = getRandomInt(1, 101);
                const post = dataReddit.data.children[random].data;
                const image = post.url;
                const title = post.title;
                const author = post.author;

                const embed = new Discord.MessageEmbed()
                    .setColor('AQUA')
                    .setImage(image)
                    .setTitle(title)
                    .setAuthor(author)
                    .setFooter(`Requested by: ${msg.author.username}`, msg.author.avatarURL());

                msg.channel.send(embed);
            })
            .catch((err) => {
                msg.reply("Error, something gone wrong")
            })
    }

}