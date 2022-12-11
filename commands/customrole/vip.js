const { message, client, MessageEmbed,MessageActionRow,MessageButton } = require("discord.js");

module.exports = {
  name: "vip",
  aliases: ['vi', 'vipp'],
  category: 'owner',
  run: async (client, message, args) => {



    if(message.member.permissions.has("ADMINISTRATOR")){
} else {
        const embed = new MessageEmbed()
        .setDescription("You are not allowed to use these command !")
        .setColor("DARK_BUT_NOT_BLACK")
        return message.channel.send({embeds: [embed]})
    }
const abc = message.mentions.members.first() || message.guild.members.cache.get(args[0])
if(!abc){
    return message.channel.send(`Provide The User`)
}
   

    if(abc){
        const vip = await client.db.get(`vip_${message.guild.id}`)  || "no"
        if(vip === "no"){
            const embed = new MessageEmbed()
            .setDescription(`You don't have any vip Role Yet.`)
            .setColor('DARK_BUT_NOT_BLACK')
            return message.channel.send({embeds:[embed]});
        }
        
        const check = abc.roles.cache.has(vip)
        if(check){
abc.roles.remove(vip);
const embed = new MessageEmbed()
.setDescription(`Successfully Removed vip Role`)
.setColor('DARK_BUT_NOT_BLACK')
 message.channel.send({embeds:[embed]});
        } else {
            abc.roles.add(vip); 
            const embed = new MessageEmbed()
            .setDescription(`Added vip Role`)
            .setColor('DARK_BUT_NOT_BLACK')
             message.channel.send({embeds:[embed]});
        }
    }
    
  }}