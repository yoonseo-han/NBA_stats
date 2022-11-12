const {Client,Events, GatewayIntentBits} = require('discord.js');
const config = require('./config.json');
const TOKEN = config.chatbot_token;


const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("ready", () =>{
    console.log("The AI bot is online"); //message when bot is online
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on("messageCreate", (message) => {
    if (message.content.substring(0, 6) === "!Teams") {
        message.channel.send("Which team do you want to know?"); //reply if message has "!" as first character
    }
});


client.login(TOKEN);