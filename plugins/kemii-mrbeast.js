let fetch = require('node-fetch')
let handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  if (!text) return conn.reply(m.chat, `• *Example :* ${usedPrefix}${command} Hello`, m)
	conn.sendMessage(m.chat, {
		react: {
			text: '🕒',
			key: m.key,
		}
	})
  let res = `https://api.yanzbotz.my.id/api/tts/mrbeast?query=${text}&apiKey=Fardankey`
  conn.sendFile(m.chat, res, `openaiv.mp3`, '', m, true);
}
handler.help = ['mrbeast *<teks>*']
handler.tags = ['ai']
handler.command = /^mrbeast$/i
handler.limit = true
handler.premium = false
module.exports = handler

module.exports = handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}