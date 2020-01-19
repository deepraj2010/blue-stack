import { Client } from 'discord.js';
import config from 'config';
import Commands from '../commands/commands'

const main = () => {

    const bot = new Client();
    const PREFIX = '!';
    const token = config.get('bot_token');
    console.log(token);
    
    bot.on('ready', () => {
        console.log('This bot is online');
    })
    
    bot.on('message', msg => {
        try {
            let content = msg.content;
            if(content === 'hi') {
                msg.reply('hey');
            } else if(content.length > 0) {
                let args = content.substring(PREFIX.length).split(" ");
                let command = args[0];
                let Exec = Commands.get(command);
                if(Exec != undefined) {
                    let executable = new Exec(args.slice(1));
                    const result = executable.execute();
                    result.then((response) => {
                        console.log(response);
                        msg.reply(response);
                    }).catch((error) => {
                        console.log(error);
                    })
                }
            }
        } catch(error) {
            console.log(error);
        }
    })

    bot.login(token).catch(error => {
        console.log("Failed to login", error);
    });
}

export default main;
