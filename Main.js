const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.GuildPresences,
		GatewayIntentBits.GuildMessageReactions,
		GatewayIntentBits.DirectMessages,
		GatewayIntentBits.MessageContent
	], 
	partials: [
    Partials.Channel,
    Partials.Message,
    Partials.User,
    Partials.GuildMember,
    Partials.ThreadMember,
    Partials.Reaction,
    Partials.GuildScheduledEvent
  ]
});


client.commands = new Collection()
client.aliases = new Collection()
module.exports = client;


['Command', 'Events'].forEach((handler) => {
  require(`./Handlers/${handler}`)(client)
});


client.login(process.env.Token)
