import requests
import discord
import json

with open("config.json", "r") as f:
    config = json.load(f)

NBA_url = config['url']
TOKEN = config['chatbot_token']
headers = config['headers']

querystring = {"page":"0","per_page":"25","search":"Michael jordan"}

response = requests.request("GET", NBA_url, headers=headers, params=querystring)

print(response)

class MyClient(discord.Client):
    async def on_ready(self):
        print('Logged in as')
        print(self.user.name)
        print(self.user.id)
        print('------')

intents = discord.Intents.default()
intents.message_content = True

client = MyClient(intents=intents)
client.run(TOKEN)
