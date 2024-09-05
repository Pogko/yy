let fetch = require('node-fetch')

let handler = async (m, { conn, text, command }) => {
  conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
  let kemii = await fetch(`https://skizo.tech/api/tttrending?region=ID&apikey=${global.xzn}`)
  let res = await kemii.json()
  let salsa = `乂  *TIKTOK - TRENDING*
 
	◦  *Title :* ${res.title}
	◦  *Views :* ${res.play_count}
	◦  *Author :* ${res.author.nickname}
	
ᴀᴍʙᴀᴛᴜʙᴏᴛ`
  conn.sendFile(m.chat, res.play, 'tiktokt.mp4', salsa, m)
}
handler.help = ['tiktoktrending']
handler.tags = ['downloader']

handler.command = /^tiktokt|tiktoktrending|tttrending$/i
handler.premium = false

module.exports = handler