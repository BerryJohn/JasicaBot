module.exports = {
    name: 'usun',
    description: 'usuwa punkty jasice',
    execute(msg, args) {
        // if (!isNaN(args[0]) && args[0] > 0 && args[0] <= 3)
        //     discredits -= parseInt(args[0]);
        // else
        //     discredits--;
        msg.channel.send(`Jasica miałeś farta. Skompromitowałeś się tylko X razy`);
    }
}