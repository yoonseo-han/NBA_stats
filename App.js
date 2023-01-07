//Act as a server to connect to discord bot


const {Client,Events, GatewayIntentBits} = require('discord.js');
const config = require('./config.json');
const TOKEN = config.chatbot_token;
//const {Team_Stats} = require('./Team_Info.js');
const fetch = require('node-fetch-commonjs');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': config.headers['X-Ra]pidAPI-Key'],
		'X-RapidAPI-Host': config.headers['X-RapidAPI-Host']
	}
};

async function getTeamInfo() {
    console.log(config.url + 'teams?id=2');
    fetch(config.url + 'teams?id=2', options) 
        .then(response => response.json())
        .then(parsed_data => {
            console.log(parsed_data);
        })
        .catch(err => console.log(err));
}

client.on("ready", () => {
    console.log("Discord bot Ready");
});

client.on("messageCreate", (message) => {
    console.log("Recevied message");
    getTeamInfo();
});


client.login(TOKEN);