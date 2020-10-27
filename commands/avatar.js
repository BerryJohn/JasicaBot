const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    description: 'return user avatar',
    execute(msg, args) {
        const user = msg.mentions.users.first() || msg.author;
        const avatar = user.avatarURL();

        const embed = new Discord.MessageEmbed()
            .setTitle(`**${user.username}** avatar:`)
            .setImage(avatar)
            .setColor('GOLD')
            .setFooter('Such beautiful!');
        msg.channel.send(user.username);
        msg.channel.send(embed);
    }
}