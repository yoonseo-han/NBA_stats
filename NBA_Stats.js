const {Client,Events, GatewayIntentBits} = require('discord.js');
const config = require('./config.json');
const TOKEN = config.chatbot_token;

// //To bring result from Stats.py
// const spawn = require("child_process").spawn;
// const pythonProcess = spawn('python',['./Stats.py']);


const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("ready", () =>{
    console.log("The AI bot is online"); //message when bot is online
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on("messageCreate", (message) => {
    if (message.content.substring(0, 6).toLowerCase() === "!team") {
        //Output information of team id that is input after !Team
        message.channel.send(`Information of your following team`);
        //To bring result from Stats.py into discord

        const spawn = require("child_process").spawn;
        const pythonProcess = spawn('python',['./Stats.py']);
        pythonProcess.stdout.on('data', (data) => {
            //TASK: HOW TO PARSE THE RECEIVED JSON OBJECT!!!!!!
            var parsed_data = JSON.parse(data);
            //console.log(`${data['results']}`);
            console.log(`${data}`);
            //message.channel.send(`${data.results}`);
        })
    }

    else if (message.content.substring(0,8).toLowerCase() == "!Player") {
        message.channel.send(`The following player`);
    }
});


client.login(TOKEN);