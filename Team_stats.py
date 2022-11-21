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

#Set query string based on received input: Receive city name
#Find corresponding id based on city
#print("line");
querystring = {"id":"2"}

response = requests.request("GET", STAT_URL + ('teams'), headers=headers, params=querystring)

# Transform response to text form and send to js server
print(response.text)
sys.stdout.flush()