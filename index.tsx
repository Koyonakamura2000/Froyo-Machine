const { config } = require('dotenv');

config();

// Discord.js versions ^13.0 require us to explicitly define client intents
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
  GatewayIntentBits.GuildMembers,
], });

console.log("Token: " + process.env.CLIENT_TOKEN);

// 
client.on('ready', async () => {
  // const textChannel = await client.channels.fetch('855321310954389525');
  // textChannel.send("Hello there");
  console.log(`Logged in as ${client?.user?.tag || 'No client detected'}!`);
});

// Log in 
client.login(process.env.CLIENT_TOKEN);

client.on('messageCreate', msg => {
  if (msg.content === 'Hello') {
    msg.reply(`Hello ${msg.author.username}`);
  }
});