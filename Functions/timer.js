const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
if (new Date().getMinutes() !== 22) {
  return;
} else {
  await lib.discord.channels['@0.0.3'].messages.create({
    channel_id: '854800554956947456',
    content: `<@&856991195863318548> Time to rolll hehe!`
  });
}