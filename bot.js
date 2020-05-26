const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
    console.log("Connected !")
})
bot.login('token')

bot.on("guildMemberAdd", member => {
    member.guild.channels.cache.get('channelID').send(`Welcome ${member.user}`);
});
