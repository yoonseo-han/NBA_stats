import requests
import discord
import json
import sys

# Function to format received json file
def jprint(obj) :
    text = json.dumps(obj, sort_keys=True, indent=4)
    print(text)


with open("config.json", "r") as f:
    config = json.load(f)

STAT_URL = config['url']
headers = config['headers']

querystring = {"id":"2"}

response = requests.request("GET", STAT_URL + ('teams'), headers=headers, params=querystring)

# Transform response to text form and send to js server
print(response.text)
sys.stdout.flush()