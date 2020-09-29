const dotenv = require('dotenv'),
    path = require('path')
dotenv.config({ path: path.join(__dirname, '../.env') })

const { Client } = require('discord.js');
const client = new Client();

client.on('ready', () => {
    console.log(`${client.user.username} has logged in`);
});

client.on('message', (message) => {
    if (message.author.bot) return;
    console.log(`${message.author.tag} Birthday Logged`);
    if (message.content === 'my birthday') {
        message.channel.send('Will remember your birthday buddy!')
    }
})

client.login(process.env.DISCORD_BOT_TOKEN);
