const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = 'Njk1NDk1MjUxMzc2MzQxMDEy.XopFJA.XxIk5tARoGnwpbC1qe1fwjGXj44';

bot.registry.registerGroup('simple','simple');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

// test para o discord 
bot.on('message', function(message)
{
    if(message.content == 'Hello')
    {
        message.channel.send('Hello' + message.author + ', look at me!');
    }
});

// test para o terminal
bot.on('ready', function()
{
    console.log('ready');
})

bot.login(TOKEN);