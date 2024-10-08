const fs = require('fs')
const path = require('path')

let handler = async (m, { conn, text }) => {
  if (conn.user.jid !== global.conn.user.jid) return
  if (!text) return conn.reply(m.chat, '• *Example :* .gf config.js', m)
  let fileName = text.trim().toLowerCase()
  let filePath = path.join(__dirname, '..', fileName)
  if (!fs.existsSync(filePath)) {
    return conn.reply(m.chat, `The file ${fileName}.js does not exist!`, m)
  }

  let fileContent = fs.readFileSync(filePath, 'utf-8')
  conn.reply(m.chat, fileContent, m)
}

handler.help = ['gf *<text>*']
handler.tags = ['tools']
handler.owner = true
handler.command = /^gf$/i

module.exports = handler