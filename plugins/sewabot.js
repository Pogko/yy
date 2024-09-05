let handler = async (m, { conn }) => {
conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
  const { proto, generateWAMessageFromContent, prepareWAMessageMedia } = require("@whiskeysockets/baileys") 
	
	const msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
      messageContextInfo: {
        deviceListMetadata: {},
        deviceListMetadataVersion: 2
      },
      interactiveMessage: proto.Message.InteractiveMessage.fromObject({
      contextInfo: {
        	mentionedJid: [m.sender], 
        	isForwarded: true, 
	        forwardedNewsletterMessageInfo: {
			newsletterJid: '120363144038483540@newsletter',
			newsletterName: 'Powered By : Ambatubot', 
			serverMessageId: -1
		},
	businessMessageForwardInfo: { businessOwnerJid: conn.decodeJid(conn.user.id) },
	forwardingScore: 256,
            externalAdReply: {  
                title: 'AMBATUBOT', 
                thumbnailUrl: 'https://telegra.ph/file/7aeeb22ce0062dbd4c656.png', 
                sourceUrl: 'https://youtube.com/shorts/eHM3CMiAQ9Y?si=sqJQ1gyRAnptIK0m',
                mediaType: 2,
                renderLargerThumbnail: false
            }
          }, 
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: `*Hello, @${m.sender.replace(/@.+/g, '')}!*\nSilahkan Lihat Produk Di Bawah!`
        }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({
          text: 'Powered By _ICSF Team_'
        }),
        header: proto.Message.InteractiveMessage.Header.fromObject({
          hasMediaAttachment: false
        }),
        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
          cards: [
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: '> *7 Days : 3.000*\n> *30 Days : 10.000*\n> *Permanen : 25.000*\n\n`</> Benefit Prem </>`\n\n> Get Unlimited Limit\n> Get Acces All Fitur\n> Get Profile Good'
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: '`</> Premium Bot </>`\n',
                hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/7aeeb22ce0062dbd4c656.png' } }, { upload: conn.waUploadToServer }))
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "cta_url",
                    buttonParamsJson: `{"display_text":"Order Here!","url":"https://wa.me/6283830017500","merchant_url":"https://wa.me/6283830017500"}`
                  }
                  ]
              })
            },
            {
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: '> *7 Days : 5.000*\n> *30 Days : 15.000*\n> *Permanen : 50.000*\n\n`</> Benefit Sewa </>`\n\n> Auto Welcome\n> Auto Kick\n> Auto Open/Close'
              }),
              footer: proto.Message.InteractiveMessage.Footer.fromObject({
              }),
              header: proto.Message.InteractiveMessage.Header.fromObject({
                title: '`</> Sewa Bot </>`\n',
                hasMediaAttachment: true,...(await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/7aeeb22ce0062dbd4c656.png' } }, { upload: conn.waUploadToServer }))
              }),
              nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                buttons: [
                  {
                    name: "cta_url",
                    buttonParamsJson: `{"display_text":"Order Here!","url":"https://wa.me/6283830017500","merchant_url":"https://wa.me/6283830017500"}`
                  }
                  ]
              })
            }
          ]
        })
      })
    }
  }
}, { userJid: m.chat, quoted: m })
conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })
}
handler.help = ['sewabot', 'premium']
handler.tags = ['main']
handler.command = /^(sewa|sewabot|premium|sew)$/i
handler.private = false

module.exports = handler