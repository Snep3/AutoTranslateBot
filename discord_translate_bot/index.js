const { Client, GatewayIntentBits } = require('discord.js');
const translate = require('google-translate-api-x');
require('dotenv').config();

// discord bot token
const TOKEN = process.env.DISCORD_TOKEN;

//
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`${client.user.tag} is running.`);
});

client.on('messageCreate', async (message) => {
  // ignore messages from bots
  if (message.author.bot) return;

  try {
    // translates to english
    const result = await translate(message.content, { to: 'en' });

    // whenever the translate is changes sends the translated message
    if (result.text.toLowerCase() !== message.content.toLowerCase()) {
      await message.channel.send(` ${message.author.username}: ${result.text}`);
    }
  } catch (err) {
    console.error('❌ Translation error:', err);
    await message.channel.send('error translating message.');
  }
});

client.login(TOKEN);
