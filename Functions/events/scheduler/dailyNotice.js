const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const replies = [
    'Hi there, if you haven’t already consider checking out joining our society. We do events, giveaways, movie nights and more! Here is a link for you https://www.astonsu.com/society/gamingsoc/',
    'We have an Instagram, Facebook and a Twitter! If you fancy following here is a link to our page with them. https://www.astonsu.com/society/gamingsoc/',
    'Hey you, yeah you! You should server boost, don’t have to but may be kinda pog. ',
    'Have you thought about joining our society? No… you should totally check it out! Here is a link. https://www.astonsu.com/society/gamingsoc/',
    'We host game night every other Friday from 20:00, Keep an eye on announcements for when the next game night is!!(Everyone is welcomed!)'
];
  
let randomlySelectedGreeting = replies[Math.floor(Math.random() * replies.length)];
await lib.discord.channels['@0.0.3'].messages.create({
  channel_id: `759084557495435278`,
  content: randomlySelectedGreeting 
});