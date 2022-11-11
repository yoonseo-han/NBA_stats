const {Client, GatewayIntentBits} = require('discord.js');
const config = require('./config.json');
const TOKEN = config.chatbot_token;


const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on("ready", () =>{
    console.log("The AI bot is online"); //message when bot is online
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", (message) => {
    message.channel.send("HELLO TEST");
    if (message.content.substring(0, 1) === "!") {
        message.channel.send("Hello from AI bot"); //reply if message has "!" as first character
    }
});
client.login(TOKEN);