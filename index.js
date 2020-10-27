const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json');
const radio = require('./radio/radio.js');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

    const args = msg.content.slice(config.prefix.length).trim().split(/ +/);

    if (msg.channel.name === 'jasica-disco' && !msg.author.bot) {
        radio.execute(msg, args);
        return;
    }

    const command = args.shift().toLowerCase();

    if (!msg.content.startsWith(config.prefix) || msg.author.bot)
        return;

    if (!client.commands.has(command)) {
        msg.channel.send("Zła komenda idioto");
        return;
    }

    try {
        client.commands.get(command).execute(msg, args, client);
    } catch (err) {
        console.error(err);
    }

});



client.login(config.token);