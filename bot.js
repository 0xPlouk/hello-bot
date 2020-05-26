const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
    console.log("Connected !")
})
bot.login('NzE0NDE2MzY0NDExOTQ0OTk4.Xszpmg.31iypl_sktAqSnLOTD5P-BkU5nM')

bot.on("guildMemberAdd", member => {
    member.guild.channels.cache.get('613123692813352970').send(`Bienvenue ${member.user} tu peux te présenter ici :slight_smile:`);
});
