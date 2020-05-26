const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
    console.log("Connected !")
})
bot.login('toekn')

bot.on("guildMemberAdd", member => {
    member.guild.channels.cache.get('613123692813352970').send(`Welcom ${member.user}`);
});
