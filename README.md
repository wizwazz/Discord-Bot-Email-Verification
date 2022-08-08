# Discord-Bot-Email-Verification
This was made to verify email address for my current university, its used by my society discord to make sure users are apart of the university.
It was created in autocode, Some of the code wont make any sense as I didn't comment on much of it xD but here is an overview of what it does:

So first off the user would type .verify theirEmailAddress and the bot would delete the message and would send a verification code to the users email address.
This would also be logged in a seprate channel for admins to view whos been verified.
Once the user has gotten their verification code they would do .confirm theirEmailAddress verficationCode, they have 10 mins to do this.
The bot would check the verication code, it stores the user email address and verication code together so it validates if they their emaill address matches up to the correct code.
This is only stored in the bot for 10 minutes, and once the user has verified themselves it deletes it automattically and gives the user a verified role allowing to
access more of the server.

Another part of the bot, it sends a random custom message every day at 6pm BST in general chat. It can also send a custom message after a certain amount of chats.
