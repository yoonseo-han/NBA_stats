//JS server to print out NBA team information

const config = require('./config.json');
const commands = require('./NBA_Stats');

console.log(commands);

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': config.headers['X-RapidAPI-Key'],
		'X-RapidAPI-Host': config.headers['X-RapidAPI-Host']
	}
};

module.exports = async function getTeamInfo() {
    console.log("TEST");
    fetch(config.url + '/teams?id=2', options)
	.then(response => response.json())
	.then(parsed_data => {
        console.log("HELLO");
        console.log(parsed_data['response'][0]);
        //console.log(parsed_data['response'][0]['name']);
        message.channel.send(`Team name: ${parsed_data['response'][0]['name']}`);
        message.channel.send(`Team Logo: ${parsed_data['response'][0]['logo']}`);
    })
	.catch(err => console.error(err));
}
