let handler = async (m, { conn, args, command }) => {
	let group = m.chat
        await conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/d56ab0753ec15a120d83c.jpg', m, { packname: "Godbyee", author: "Kikuchanj" })
        await conn.delay(1000)
        await conn.groupLeave(group)
        }
handler.command = ["leave"]

handler.mods = true
handler.group = true

module.exports = handler