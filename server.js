const Discord =require('discord.js);
const client =new Discord.Client();


client.on('message', async message => {
   if (!message.content.startsWith(prefix)) return; // use this only, so your bot will be only executed with prefix.
  
  let args = message.content.slice(prefix.length).trim().split(/ +/g);
  let msg = message.content.toLowerCase();
  let cmd = args.shift().toLowerCase();
  
  message.flags = [];
  while (args[0] && args[0][0] === "-") {
    message.flags.push(args.shift().slice(1)); // Message Flags: -default, -ban, -parameter...
  }
  
