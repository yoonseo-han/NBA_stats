//Act as a server to connect to discord bot


import { Client, Events, GatewayIntentBits } from 'discord.js';
import {config} from "./config.json" assert {type: 'json'};
const TOKEN = config.chatbot_token;
//const {Team_Stats} = require('./Team_Info.js');
import fetch from 'node-fetch';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': config.headers['X-RapidAPI-Key'],
		'X-RapidAPI-Host': config.headers['X-RapidAPI-Host']
	}
};

async function getTeamInfo() {
    fetch(config.url + 'teams?id=2', options) 
        .then(response => response.json())
        .then(parsed_data => {
            console.log("HELLO");
            console.log(parsed_data['response'][0]);
        })
        .catch(err => console.log(err));
}

client.on("ready", () => {
    console.log("Discord bot Ready");
});

client.on("messageCreate", (message) => {
    getTeamInfo();
});


client.login(TOKEN);