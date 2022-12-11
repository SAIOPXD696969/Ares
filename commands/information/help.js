const {
    MessageEmbed,
    Message,
    MessageActionRow,
    MessageButton,
    MessageSelectMenu,
    Client
} = require("discord.js");
const Settings = require('../../core/settings.js');
const client = require('../../index');
const db = require('../../core/db');

module.exports = {
  name: 'help',
  aliases: ['h'],
  category: 'info',
  run: async (client, message, args) => {
    let prefix = await db.get(`prefix_${message.guild.id}`);
    if (!prefix) prefix = Settings.bot.info.prefix;
    const r1 = new MessageActionRow().addComponents(
      new MessageButton().setStyle(`SECONDARY`).setCustomId(`p1`).setEmoji(`<:icons_swardx:1002585419986260008>`),
      new MessageButton().setStyle(`SECONDARY`).setCustomId(`p2`).setEmoji(`<:Staff:1022393931863961600>`),
      new MessageButton().setStyle(`SECONDARY`).setCustomId(`p3`).setEmoji(`<:Icons_utility:1002585698764869692>`),
      new MessageButton().setStyle(`SECONDARY`).setCustomId(`p4`).setEmoji(`<:Giveaways:1003345588894580807>`)
    );
    const r2 = new MessageActionRow().addComponents(
      new MessageButton().setStyle(`SECONDARY`).setCustomId(`p5`).setEmoji(`<:icons_Discord:1002592029890580540>`),
      new MessageButton().setStyle(`SECONDARY`).setCustomId(`p6`).setEmoji(`<:paper:1003952260369354763>`),
      new MessageButton().setStyle(`SECONDARY`).setCustomId(`p7`).setEmoji(`<:security:1003341803820425227>`),
      new MessageButton().setStyle(`SECONDARY`).setCustomId(`p8`).setEmoji(`<:y_catpeace:1003346077447106651>`)
    );
    const row = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('helpop')
          .setPlaceholder(`❯ Choose A Category.`)
          .addOptions([
            {
              label: ' AntiNuke',
              description: 'Get All AntiNuke Command List',
              value: 'first',
            
            },
            {
              label: ' Moderation',
              description: 'Get All Moderation Command List',
              value: 'second',
           
            },
            {
              label: 'Utility',
              description: 'Get All Utility Command List',
              value: 'third',
             
            },
            {
              label: 'Fun',
              description: 'Get All Fun Command List',
              value: 'fourth',
             
            },
            {
              label: 'Giveaway',
              description: 'Get All Giveaway Commmand List',
              value: 'fifth',
            
            },
            {
              label: 'Welcomer',
              description: 'Get All Welcomer Command List',
              value: 'sixth',
             
            }
          ])
        )
    const embed = new MessageEmbed()
    .setColor("AQUA")
    .setAuthor({ name: `${client.user.tag} HelpDesk`, iconURL: client.user.displayAvatarURL({dynamic: true})})
    .setDescription(`<a:emote:1051375619927179265> Prefix for this server \`${prefix}\`\n<a:emote:1051375619927179265> Click on the **Dropdown** to see each **command** within a **Specific Category**\n\`\`\`yaml\n<> - Required Arguement | () - Optional Arguement\`\`\``)
    .addFields([{name : `<:Icons_utility:1002585698764869692> __Main__` , value : `>>> <:icons_swardx:1002585419986260008> AntiNuke \n <:Staff:1022393931863961600> Moderation \n <:Icons_utility:1002585698764869692> Utility \n <:Giveaways:1003345588894580807> Giveaway` , inline : true},
          {name : `<:gift:1008624142804856873> __Extra__` , value : `>>> <:icons_Discord:1002592029890580540> Fun \n <:paper:1003952260369354763> Image \n <:security:1003341803820425227> Custom Roles \n <:y_catpeace:1003346077447106651> Welcomer` , inline : true},
          {name : `<:website:1036169572849561600> __Links__` , value : `**[Invite Me](https://discord.com/api/oauth2/authorize?client_id=798069916892659743&permissions=8&scope=bot%20applications.commands) | [Support Server](https://discord.gg/Z4tKgfgj9Y) | [Vote Me](https://top.gg/bot/798069916892659743/vote)**` , inline : false}
  ]).setThumbnail(message.guild.iconURL({dynamic : true}))
    message.channel.send({embeds: [embed], components: [r1,r2,row]})
  }
}

function embeds(embed, prefix, ping) {
  if (embed === 'help') {
    return new MessageEmbed()
      .setColor('FF0000')
      .setAuthor(client.user.username, client.user.displayAvatarURL(), "https://discord.gg/5SsfRf6ueX")
      .setDescription(`**<a:skye_help:1024947429113602048> My Default Prefix Is  -**

**<a:c_dot4:1026889119667847249> A Best Antinuke Security Bot With Many More Advance Features
<a:c_dot4:1026889119667847249> ${client.user.username} Provides You Best Premium Security Features 
<a:c_dot4:1026889119667847249> [Invite](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot) | [Support](https://discord.gg/TCf2JQafK8) | Total ${client.commands.size - 1} Commands **

**Choose One Of The Category Below : **

<:skye_module:1024957289616117800>  **__Main Module__**
>  **<:skye_antinuke:1024952333731364876> <:skye_arrow:1024953388909215764> Antinuke **
>  **<:skye_mod:1024952187136262154> <:skye_arrow:1024953388909215764> Moderation**
>  **<:skye_whitelist:1024952571535827014> <:skye_arrow:1024953388909215764> Whitelist** `);
    
  } else if (embed === 'x') {
    return new MessageEmbed()
      .setColor("FF0000")
      .setDescription("**MODERATION** `ban`,`kick`,`unban`,`mute`,`unmute`,`lock`,`unlock`,`unhide`,`hide`,`unbanall`,`nuke`")
  } else if (embed === 'toggle') {
    return new MessageEmbed()
    .setColor('FF0000')
    .setDescription(`**ANTINUKE COMMANDS**

>  To Enable Use :  \`-antinuke enable\`
>  To Disable Use :  \`-antinuke disable\`

Enabling Antinuke Will Feature Your Server : 

• \`Anti Ban\`,\`Anti Kick\`,\`Anti Unban\`,\` Anti Role Create\`,\`Anti Role Update \`,\`Anti Role Delete\`,\` Anti Channel Create\`,\`Anti Channel Delete\`,\`Anti Channel Update\`, \`Anti Emoji Create\` , \`Anti Emoji Delete\` , \`Anti Emoji Update\`,\`Anti Webhook Create \`,\`Anti Webhook Update\`,\`Anti Webhook Delete\`,\`Anti Sticker Create\`,\`Anti Sticker Update\`,\`Anti Sticker Delete\`,\`Anti Everyone/Here \`,\`Anti Server Update \`,\`Anti Prune \`,\`Anti Bot Add \`,\`Anti Vanity Steal \``);

  } 
}
