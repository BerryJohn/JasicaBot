const Discord = require('discord.js');


module.exports = {
    name: 'init',
    description: 'initalizing channel for music',
    execute(msg, args, client) {

        const channels = msg.guild.channels.cache.filter(channel => channel.name === "jasica-disco");

        if (channels.size > 0)
            msg.reply("Channel already exists");
        else {

            msg.guild.channels.create('jasica-disco', {
                type: 'text',
                topic: 'Type music title or paste link'
            }).then(createdChannel => {
                const id = createdChannel.id;
                const radio = msg.guild.channels.cache.get(id);
                const embed = new Discord.MessageEmbed()
                    .setTitle('JasicaBot disko music!')
                    .setImage('https://i.imgur.com/z2O69ea.jpg')
                    .setColor('GOLD')
                    .setFooter('OMEGALUL');
                radio.send(embed);
            });



        }
    }
}