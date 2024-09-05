let { MessageType } = require('@whiskeysockets/baileys')
let PhoneNumber = require('awesome-phonenumber')

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; Amat\nORG:Amat\nTITLE:soft\nitem1.TEL;waid=${nomorown}:${nomorown}\nitem1.X-ABLabel:Ponsel\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:Lokasi\nEND:VCARD`;

  const sentMsg = await conn.sendMessage(
    m.chat,
    {
      contacts: {
        displayName: wm,
        contacts: [{ vcard }],
      },
      footer: "Hubungi owner kami",
      buttons: [
        { buttonId: `tel:${nomorown}`, buttonText: { displayText: "Kirim Pesan" }, type: 1 }
      ],
      headerType: 1
    },
    { quoted: m }
  );
}

handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner)$/i

module.exports = handler