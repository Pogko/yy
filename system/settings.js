let fs = require('fs') 
let chalk = require('chalk')
let moment = require('moment-timezone')

// Owner
global.owner = [
  ['6283830017500', 'amat', true]
] // Put your number here
global.mods = ['6283830017500'] // Moderator
global.prems = ['6283830017500'] // Premium
global.xyro = 'ClaraKeyOfficial';
global.btc = 'Rizalzllk';
global.xzn = 'Kemii';
global.yanz = 'iyan123';
global.zein = 'zenzkey_c22460242f6e',
global.APIs = {
    // API Prefix
    // name: 'https://website'
    xteam: 'https://api.xteam.xyz',
    lol: 'https://api.lolhuman.xyz',
    males: 'https://malesin.xyz',
    neoxr: 'https://api.neoxr.eu',
    xyro: 'https://api.xyroinee.xyz',
    btc: 'https://api.betabotz.org',
    xfarr: 'https://api.xfarr.com',
    dzx: 'https://api.dhamzxploit.my.id',
    zein: 'https://api.zahwazein.xyz',
    rose: 'https://api.itsrose.life',
    popcat: 'https://api.popcat.xyz',
    xzn: 'https://skizo.tech',
    saipul: 'https://saipulanuar.cf',
}
global.APIKeys = {
    // APIKey Here
    // 'https://website': 'apikey'
    'https://api.zahwazein.xyz': 'zenzkey_c22460242f6e',
    'https://api.xteam.xyz': 'cristian9407',
    'https://api.xyroinee.xyz': 'ClaraKeyOfficial',
    'https://api.neoxr.eu': 'Composing',
    'https://api.xfarr.com': 'Kemii',
    'https://api.zahwazein.xyz': 'Kemii',
    'https://api.betabotz.org': 'Rizalzllk',
    'https://api.lolhuman.xyz': 'GataDios',
    'https://api.itsrose.life': 'Rk-Salsabila',
    'https://skizo.tech': 'Composing',
}

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = 'Ambatubot'
  var sticker_author = 'Amat'
} else {
  var sticker_name = 'Ambatubot'
  var sticker_author = 'Amat'
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

// Document
global.minety = pickRandom(['application/msword', 'application/vnd.ms-excel', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'])
global.kiku = 'application/vnd.android.package-archive'

// Database
global.version = '5.0.3'
global.sessionName = 'salsa'
global.gcbot = 'https://chat.whatsapp.com/DYUDQL1uSnb1476lDo63y8'
global.instagram = '-'
global.namebot = '© Ambatubot'
global.thumb = 'https://telegra.ph/file/7b5416e93b4423845762d.jpg'
global.thumbnail = 'https://telegra.ph/file/7b5416e93b4423845762d.jpg'

global.qris = '-'
global.email = '-'
global.creator = "6283830017500@s.whatsapp.net"
global.nomorbot = '-'
global.nomorown = '6283830017500'

// Atlantic Pedia Api
global.atlaapi = 'jiKgbG6XBgU3E0zL0UjeXdELK5ExfzDycILGo5JWQYwITQ0UAZCoNZFd1MAOC2OY1I5qBFRdSV4wHzTUZl19e6T7IZF5ciLHn1MK'

// Medan Pedia Api
global.medan = ''
global.medanid = ''

// Sosial Media
global.sig = '-'
global.syt = '-'
global.sgh = '-'
global.sgc = '-'
global.swa = '-'
global.swb = '-' // Link Discord
global.snh = 'https://nhentai.net/g/365296/' // Link nhentai

// Pembayaran
global.pdana = '~Not Found~'
global.povo = '~Not Found~'
global.pgopay = '~Not Found~'
global.pulsa = '~Not Found~'
global.pulsa2 = '~Not Found~'
global.psaweria = '~Not Found~'
global.ptrakteer = '~Not Found~'
global.psbuzz = '~Not Found~'

// Fake Size
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

global.useMulti = true
global.autoread = true

// Watermark
global.packname = 'Ambatubot'
global.author = '-'
global.wm = '© Ambatubot'
global.wm2 = 'Salsa Javanese'
global.titlebot = `${global.wm}`
global.danied = 'A K S E S  K A M U  D I  T O L A K!!'
global.done = '```Status Request :```' + ' `Succes`'
global.packname = 'Ambatubot'
global.author = 'Amat'
global.nameown = 'Amat'
global.wait = 'Wait a moment... '

// Tampilan
global.htki =  '⬣───「' // Hiasan kiri
global.htka = '」───⬣' // Hiasan kanan
global.htjava = '❃' // Hiasan
global.sa = '╭─'
global.gx = '│✇'
global.gy = '│•'
global.gz = '│'
global.sb = '╰────࿐'
global.kki = '「'
global.kka = '」'

global.multiplier = 1000 // The higher, The harder levelup

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})//