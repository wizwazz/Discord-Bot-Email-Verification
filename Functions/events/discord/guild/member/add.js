const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

// *** Set the channel ID to post in ***
const channel_id = process.env.WELCOME_CHANNEL_ID

await lib.discord.channels['@0.1.1'].messages.create({
  channel_id,
  content: `Welcome to this server <@${context.params.event.user.id}>! Hope you enjoy your time here! We would like all user to verify they are Aston University Students. Can you please verify in <#${880261107896434730}> to be able to access everything this server got to show!`,
});