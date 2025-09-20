const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SHABAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU4vSTJ0QXdSSXUwNnBPNnBrTEFMeGZFODBaMDRvRXZodDFKaXhJWmtGaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSklQVzZqcGVtbzZmNExxVnp1eVpSVjhYZDJyWVFFQ1FFaktCMTNMZ2RqUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSzZ4eWhqME9oV3BabDgwb0wxeURxTHFqUzJhRFBocmJ3SE5EVng5ZDJnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYdTM2UkJFTDl2bm4vekhPTVNrcVdMWHMxNnFqYUt4emlZWVlCNTh0TkYwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRQazVIVmg3RUUxVFdVeFJVbjVhV1dFWVF2UHhQOGJMQ2N0ZHVoODJaMm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBHcU1Za3k2MXYyTGFxNiszRmFqZFptV0dFSkVTU3B3QnNLYkpXMU0zbnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0M5RlJEUzRHM2NlYjdPV2pjcFE3RitnVlpZT0FkU2UrMGVXMjZ6a2trYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR3dTa0VtT3A0OFZKZUJaQ016TDM2cEF2M2xrZ3h5RTd0YlJDSzdkS0p4Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpzaVhRcTI0UVV4SkpqcGRYS2hKQm9nTnd6bGdhblhCaXRUVlJrQ3R3SFpGK1NvcXJxL3lJY1NxM3hHT1FxTUFuNFlmSUNwUEdQaERwSUtUaHp0dURnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE4LCJhZHZTZWNyZXRLZXkiOiJZMDI3MUNXdmphTEdMM2xBdjNQMXp0eUpweklDQU9vTHk1bWZpQ0p0OE5rPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE0MjIzNTIxN0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBMDIxRTA1N0I4OERFRkY5QkM4Rjg2REE3MUI3OTk3MCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU4MzU0NTExfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxNDIyMzUyMTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMUFCRjMxMDU4NDVGOTQzOTM0N0E5ODJGMzlEMDQxQjQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1ODM1NDUxMn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiM01HTDlYQUsiLCJtZSI6eyJpZCI6IjkyMzE0MjIzNTIxNzo1M0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjIzMzMzNzcwNDY5ODEwODo1M0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ00rYitjTUhFTW00dWNZR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imh0M3M1eE5YTWtYVFgzYlB2d2JiNndNWGp1VFlIMzZxSjQ5bTllZnVCeWc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IklEdmtzUDY5bmJuMm93SUpZVDA0cE1IaEY3RzlmSko0QUtFYkVGZ0RXR0pMVUVYRDdETnBUTWl0cUR6RUwyWFJwYUxXajNDQTZEdkhLWmlTd1dLV0RBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJya0tHU2JURjFJVE1FN2RnTTFRLytCV0hrNWhFL2FqemI4dXM0Nmo2cGlIV3YwZFpJeHFMVGs4QUZYWmpncGowMlZORXg5UlhaRHNvUmdEeGRtSUNEUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzE0MjIzNTIxNzo1M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZYmQ3T2NUVnpKRjAxOTJ6NzhHMitzREY0N2syQjkrcWllUFp2WG43Z2NvIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTgzNTQ1MDgsImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR0cyIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SᴇᴇN YᴏᴜʀE SᴛᴀᴛᴜS JᴜsT NᴏW Sʜᴀʙᴀɴ-Mᴅ 𓅓*",
// set the auto reply massage on status reply
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add custom menu and mention reply image url   
BOT_NAME: process.env.BOT_NAME || "SHABAN-MD V5",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "SHABAN-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself  
OWNER_NUMBER: process.env.OWNER_NUMBER || "923142235217",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "MR-SHABAN",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Mʀ Sʜᴀʙᴀɴ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://ik.imagekit.io/mrshaban/Picsart_25-02-01_22-47-44-239.jpg",
// add img for alive msg 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups  
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923059395959",
//replace with your whatsapp number        
ANTI_CALL: process.env.ANTI_CALL || "false",
REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
