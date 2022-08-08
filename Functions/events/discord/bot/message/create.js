// authenticates you with the API standard library
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

  while (true) {
    let timeZone = context.params.event.content.split(' ')[1] || 'Europe/London';
    let timeString;
    try {
      timeString = new Date().toLocaleString('en-US', {
        timeZone: timeZone
      });
    } catch (e) {
      return;
    }
    let b = timeString.split(':')[1];
    if (b == "18") {
      await lib.discord.channels['@0.2.0'].messages.create({
        channel_id: `854800554956947456`,
        channel_name: `mudae-bot`,
        content: `Its time to roll again!`
      });
    };
}
