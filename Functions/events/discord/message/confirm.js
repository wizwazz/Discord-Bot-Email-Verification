const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
module.exports = async (event, context) => {
  
  if (event.content.toLowerCase().startsWith('.confirm')) {
    let mail = event.content.split(' ')[1];
    let vercode = event.content.split(' ')[2];
    let storedEmail = await lib.utils.kv['@0.1.16'].get({
      key: `${vercode}`
    });
    console.log('stored data', mail, vercode);
    if (storedEmail === mail) {
      await lib.discord.users['@0.0.6'].dms.create({
        recipient_id: context.params.event.author.id,
        content: `Verified! Welcome to the server! please respect and follow the rules!`,
      });
      await lib.utils.kv['@0.1.16'].clear({
        key: `${vercode}`
      });
      await lib.discord.guilds['@0.0.4'].members.roles.update({
        role_id: `759467200376864808`, // required
        user_id: `${event.author.id}`, // required
        guild_id: `${process.env.GUILD_ID}` // required
      });
      await lib.discord.guilds['@0.0.4'].members.roles.destroy({
        role_id: `884162301131898971`, // required
        user_id: `${event.author.id}`, // required
        guild_id: `${process.env.GUILD_ID}` // required
      });
      await lib.discord.channels['@0.0.6'].messages.destroy({
        message_id: event.id,
        channel_id: event.channel_id
      });
      await lib.discord.channels['@0.1.2'].messages.create({
        "channel_id": `876906939269939270`,
        "content": "",
        "tts": false,
        "embeds": [
          {
            "type": "rich",
            "title": `User Verified`,
            "description": `User <@!${event.author.id}> | Email ${mail}`,
            "color": 0x00FFFF
          }
        ]
      });
    }
    else{
      await lib.discord.users['@0.0.6'].dms.create({
        recipient_id: context.params.event.author.id,
        content: `Not valid Code/Email.`,
      });
      await lib.discord.channels['@0.0.6'].messages.destroy({
        message_id: event.id,
        channel_id: event.channel_id
      });
    }
  }
}