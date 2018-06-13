const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = "/"

Client.on('ready', ()=>{
    console.log("Bot is ready to use! Created by @Spacky");
})

Client.on('message', (message)=>{
    if(!message.content.startsWith(prefix)) return;

    if(message.content.startsWith(prefix + "help")){
        message.reply(" Please Check your dm")
        message.author.send('test');
    }



    
})


Client.login("NDU2MTQ4Mzc1MTc2NDc4NzIx.DgGUzA.UTavkS5JrAdKRPAPYtMfSQ6KvRU")
