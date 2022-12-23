const {Client,Events, GatewayIntentBits} = require('discord.js');
const config = require('./config.json');
const TOKEN = config.chatbot_token;
const {Team_Stats} = require('./Team_stats.js');

// //To bring result from Stats.py
// const spawn = require("child_process").spawn;
// const pythonProcess = spawn('python',['./Stats.py']);

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("message", () =>{
    console.log("The AI bot is online"); //message when bot is online
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on("messageCreate", (message) => {

    let commands = message.content.split(" ");

    if (commands[0].toLowerCase() === "!team") {
        //Output information of team id that is input after !Team
        message.channel.send(`Information of your following team`);

        //Send city name to Team_stats.py
        let cityName = JSON.stringify(commands[1]);
        console.log(cityName);

        const data = Team_Stats
        console.log(data);
    }

    else if (message.content.substring(0,8).toLowerCase() == "!Player") {
        message.channel.send(`The following player`);
    }
});


client.login(TOKEN);