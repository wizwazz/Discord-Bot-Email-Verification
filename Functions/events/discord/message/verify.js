
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
module.exports = async (event, context) => {
  
  let result = await lib.utils.kv['@0.1.16'].entries();
  console.log(result[0])
  
  if (event.content.toLowerCase().startsWith('.verify')) {
    let email = event.content.split('@')[1];
    let mail = event.content.split(' ')[1];
    if (email == 'aston.ac.uk'){
      await lib.discord.users['@0.0.6'].dms.create({
        recipient_id: context.params.event.author.id,
        content: `Sending verification code to your email!`,
        });
        let vercode = Math.floor(100000 + Math.random() * 900000)
        await lib.utils.kv['@0.1.16'].set({
          key: `${vercode}`,
          value: `${mail}`,
          ttl: 60 * 60
        });
        await lib.gmail.messages['@0.2.4'].create({
          to: `${mail}`,
          subject: `Verification`,
          text: `${vercode} You have 10 minutes to verify this code. Please do not share the code`
        });
        await lib.discord.channels['@0.0.6'].messages.destroy({
          message_id: event.id,
          channel_id: event.channel_id
        });
    }
    else{
      await lib.discord.users['@0.0.6'].dms.create({
        recipient_id: context.params.event.author.id,
        content: `Not valid aston email.`,
      });
      await lib.discord.channels['@0.0.6'].messages.destroy({
        message_id: event.id,
        channel_id: event.channel_id
      });
    }
  }
  
}