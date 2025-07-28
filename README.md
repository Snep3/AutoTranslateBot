# Discord Auto-Translator Bot

This is a simple Discord bot that automatically translates every message in a server into English, using the `google-translate-api-x` package.

## Features

- Listens to all messages in the server
- Ignores messages sent by bots
- Translates each message to English
- Sends the translated message back to the same channel, prefixed with the original sender's username

## Setup

1. Clone the repository or download the files.
2. Run `npm install` to install dependencies.
3. Create a `.env` file and add your bot token:
```bash
DISCORD_TOKEN=your_token_here
```
4. start the bot from the therminal:
```bash
npm i
node index.js
```


## Required Permissions

Make sure your bot has the following permissions:
- Read Messages
- Send Messages
- View Messages History

