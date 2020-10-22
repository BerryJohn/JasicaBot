module.exports = {
    name: 'dodaj',
    description: 'dodaje punkty jasice',
    execute(msg, agrs) {
        // if (!isNaN(args[0]) && args[0] > 0 && args[0] <= 3)
        //     discredits += parseInt(args[0]);
        // else
        //     discredits++;
        msg.channel.send(`Jasica skompromitował się kolejny raz! To już X razy`);
    }
}