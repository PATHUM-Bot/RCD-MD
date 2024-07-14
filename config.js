//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94761238040,94722549208";
global.owner = process.env.OWNER_NUMBER || "94720280272";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0kxWEVkZHB5ZTBqUUlvSWRVM1lGMkdjeFkrQ1RpK2ZtQ21NZmJYQ1JYcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaXhlSWxlWFovMjVLbkgvWUZnL1VFa2xaVGs1YTU0alpNWUJBU1UwSnZ6VT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjTHVJMTg1S2tlTEEvV3Bnb3k0NCszKzhINVR3NjZ1a29icVdvbjg1UzNjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUUVzNVFQYjR0YXhFMnJKSmlmS2VWTVpXVDlMMnA1RjNrZGJBcnpEcWpnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFBaHp3WHFnMGpGM0Y0Qy9oWU9aVWM4M3ZDR0NXNWZVRDlkcFhJaHFGRTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlloTmdhb2F4SytEcTkwUUZ1RGtINWRnM1dieW1lWVh0VmpxR1FmdU1XUXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkhpNDZyVFVJa3I0TU9tWU5PRTdoT00zV0hYT3NTQS9sNEgzSDdnYlIyTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ2JkR2E2dXBtS0ZCWENKVVQ4YnVNdzZSN1lCY28zU3k4ZGJvWkhhWmgxQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFzQU9yVlNFZkNHTFAxQ3p2U01kQ3U5RkFLUEU2Y0FydVlMa05NTnppRVhoOUh6NGx6VWhza2gra2VRS2hNVGxmV2RodUNjaXh4MXJoNXJDT1lNWEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMzLCJhZHZTZWNyZXRLZXkiOiJMRDJwTGdCZCtzTW1xYVRBRGRsaC9CejlJZlJOSVFZOERyTXc4amtkR00wPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKZEJjQUE5LVRubTFrSG80cGRjOFdRIiwicGhvbmVJZCI6ImQ5MzE2ZmJlLWIxZTQtNGFkYS1iMDNiLWExNWNhOTQzMzg1NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyK2lVbSs2V3VYUStrc0tRcnFjNFlRQ0JGSkU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTVJDTmVxNSs1NlFKM1k3d2luVHlGbTJOdHNVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVUWjhFQjVUIiwibWUiOnsiaWQiOiI5NDcyMDI4MDI3MjoxOEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJ8fuKAouKAon58In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJbXZyYThHRU5XVzBMUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIvTXZZcmdMd012V3NFclU1RkVMeFJKK2w2ZGpGeDEyMlo2ZSt4MTZUalJJPSIsImFjY291bnRTaWduYXR1cmUiOiJocXdodjNzUDJBMHkzck82cnhCVlZZbDR5SFJZV29uUis5VlJ1UnIrN1JqbDBZUEdWakY0N2R6RXdyaXc3MkwxekNOWjZtc3ZkUXpXRndpNzlBcTRBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiR1Nndk1nZHNUVFFaeU9HbHhwUWw5UE9CODQ0TDRMaTFrN0tHOWpad3Fnd1FwL0lzSVFrbFNndFgyK1RSNHRJSVM0ZVRyeU5hdkFnNEZEVjRtMng0Q2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcyMDI4MDI3MjoxOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmekwySzRDOERMMXJCSzFPUlJDOFVTZnBlbll4Y2RkdG1lbnZzZGVrNDBTIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwOTc4Mjc0fQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐘𝐄𝐍𝐔-𝐌𝐃-🏛😩",
  author: process.env.PACK_AUTHER || "𝐘𝐄𝐍𝐔",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐘𝐄𝐍𝐔 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐈𝐌𝐀𝐀,𝐘𝐄𝐍𝐔",
  errorChat: process.env.ERROR_CHAT || "9461238040",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
