//Coded by Tharindu Liyanage
const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

global.owner = ['+27783320433'] //👈  Enter Your number)
global.premium = ['+27783320433'] // 👈  Enter Your number)
global.emoji01 = ['🐼'] // 👈 Enter your Emoji 
global.emoji02 = ['🦋'] //👈 Enter your Emoji
global.notice = (`- *Hi 🥰 I m*
*THULANI*
*I am a 15 year old developer...*
*From South africa 🇿🇦*
*I am a Learner.*
*Not more..*
* and I am also still a Student*
global.ownernomer = '+27783320433' //👈 Enter Your number
global.ownername = 'THULANI' //👈 Enter Your name
global.botname = 'ＧＡＲ ＦＩＥＬＤ ＢＯＴ ｖ8.2' //👈 Enter Your Bot name
global.footer = 'THULANI' //👈 Enter Your Name
global.ig = 'GARFIELD-WHATSAPP-BOT-v8'
global.region = 'South Africa' // 👈 Enter Your country
global.sc = 'GARFIELD-WHATSAPP-BOT-v8'
global.packname = 'GARFIELD-BOTv8'  // 👈 You Can change this your choice 
global.author = 'THULANI DEVELOPMENTS' // 👈 You Can change this your choice 
global.sessionName = 'session'  // 👈 You Can change this your choice 
global.prefa = '','!','.'  // 👈 You Can change this your choice 
global.sp = '✸'  // 👈 You Can change this your choice 
global.mess = {
 success: 'Done 🐼', //👈 Use these in your language of choice
    admin: 'This Feature Is Only For Admin!', // 👈 Use these in your language of choice
    botAdmin: 'Bot Must Be Admin First!', // 👈 Use these in your language of choice
    owner: 'This Feature Is Only For Owner!', // 👈 Use these in your language of choice
    group: 'Feature Used Only For Groups!', //👈 Use these in your language of choice
    private: 'Features Used Only For Private Chat!', // 👈 Use these in your language of choice
    bot: 'This Feature Is Only For Bot', //👈 Use these in your language of choice
    wait: '```Please Wait 🐼```', // 👈 Use these in your language of choice
    error: 'Error! Maybe Api Key Is Expired 🐼!', // 👈 Use these in your language of choice
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.thumb =  'https://i.ibb.co/Jz0mMnC/Pics-Art-22-06-03-01-01-46-876.png' 
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.flaming = 'https://i.ibb.co/Jz0mMnC/Pics-Art-22-06-03-01-01-46-876.png' //Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.fluming = 'https://i.ibb.co/Jz0mMnC/Pics-Art-22-06-03-01-01-46-876.png' //Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.flarun = 'https://i.ibb.co/Jz0mMnC/Pics-Art-22-06-03-01-01-46-876.png' //Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.flasmurf = 'https://i.ibb.co/Jz0mMnC/Pics-Art-22-06-03-01-01-46-876.png' //Go to https://imgbb.com/, upload a photo of your choice and put its link here

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
