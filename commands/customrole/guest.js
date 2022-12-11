const { message, client, MessageEmbed,MessageActionRow,MessageButton } = require("discord.js");

module.exports = {
  name: "guest",
  aliases: ['gue', 'guesst'],
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
        const guest = await client.db.get(`guest_${message.guild.id}`)  || "no"
        if(guest === "no"){
            const embed = new MessageEmbed()
            .setDescription(`You don't have any guest Role Yet.`)
            .setColor('DARK_BUT_NOT_BLACK')
            return message.channel.send({embeds:[embed]});
        }
        
        const check = abc.roles.cache.has(guest)
        if(check){
abc.roles.remove(guest);
const embed = new MessageEmbed()
.setDescription(`Successfully Removed guest Role`)
.setColor('DARK_BUT_NOT_BLACK')
 message.channel.send({embeds:[embed]});
        } else {
            abc.roles.add(guest); 
            const embed = new MessageEmbed()
            .setDescription(`Added guest Role`)
            .setColor('DARK_BUT_NOT_BLACK')
             message.channel.send({embeds:[embed]});
        }
    }
    
  }}