/*
  *  Script By Kemii
  *  Forbidden to share and delete my wm
  *  Facebook : kemii.houkii
  *  Github : dcodekemii
  *  Telegram : t.me/dcodekemi
  *  Breach : Kemii
  *  WhatsApp : wa.me/628816609112
*/

const simple = require('./lib/simple')
const util = require('util')
const PhoneNumber = require('awesome-phonenumber')
const { color } = require('./lib/color')
const fixdelay = require('./system/fixdelay')
const { hideErrors, hideLogs } = require('./system/hidden')
const moment = require("moment-timezone")
const NeoApi = require("@neoxr/wb")
const b = new NeoApi()
const fetch = require("node-fetch")

const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(resolve, ms))


let d = new Date(new Date + 3600000) 
     let locale = 'id' 
     // d.getTimeZoneOffset() 
     // Offset -420 is 18.00 
     // Offset    0 is  0.00 
     // Offset  420 is  7.00 
    // Kemii
     let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5] 
     let week = d.toLocaleDateString(locale, { weekday: 'long' }) 
     let date = d.toLocaleDateString(locale, { 
       day: 'numeric', 
       month: 'long', 
       year: 'numeric' 
     }) 
     let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', { 
       day: 'numeric', 
       month: 'long', 
       year: 'numeric' 
     }).format(d) 
     let time = d.toLocaleTimeString(locale, { 
       hour: 'numeric', 
       minute: 'numeric', 
       second: 'numeric' 
     }) 
     let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss') 
     let wibh = moment.tz('Asia/Jakarta').format('HH') 
     let wibm = moment.tz('Asia/Jakarta').format('mm') 
     let wibs = moment.tz('Asia/Jakarta').format('ss') 
     let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss') 
     let wita = moment.tz('Asia/Makassar').format('HH:mm:ss') 
 
let botdate = `${week}, ${date} || ${wibh}:${wibm}:${wibs} WIB`
let Func = b.Function
module.exports = {  
    async handler(chatUpdate) {
        if (global.db.data == null) await loadDatabase()
        this.msgqueque = this.msgqueque || []
        // console.log(chatUpdate)
        if (!chatUpdate) return
        this.pushMessage(chatUpdate.messages).catch(console.error)
        if (!(chatUpdate.type === 'notify' || chatUpdate.type === 'append')) return
        let m = chatUpdate.messages[chatUpdate.messages.length - 1]
        // console.log(m)
        if (m.message?.viewOnceMessageV2) m.message = m.message.viewOnceMessageV2.message
        if (m.message?.documentWithCaptionMessage) m.message = m.message.documentWithCaptionMessage.message
        if (m.message?.viewOnceMessageV2Extension) m.message = m.message.viewOnceMessageV2Extension.message        
        global.settings = global.db.data.settings
        global.fkontak = global.fkontak
        if (!m) return
        // console.log(m)
        try {
            m = simple.smsg(this, m) || m
            if (!m) return
            // console.log(m)
            m.exp = 0
            m.limit = false
            try {
                let user = global.db.data.users[m.sender]
                if (typeof user !== 'object') global.db.data.users[m.sender] = {}
                if (user) {
                    if (!isNumber(user.exp)) user.exp = 0
                    if (!isNumber(user.balance)) user.balance = 0
                    if (!isNumber(user.point)) user.point = 1000
                    if (!isNumber(user.bank)) user.bank = 100000
                    if (!isNumber(user.lastclaim)) user.lastclaim = 0
                    if (!('registered' in user)) user.registered = false
                    if (!user.registered) {
                        if (!('name' in user)) user.name = m.name
                        if (!('husbu' in user)) user.husbu = ''
                        if (!('location' in user)) user.location = ''
                        if (!('agama' in user)) user.agama = ''
                        if (!('waifu' in user)) user.waifu = ''
                        if (!('jid' in user)) user.jid = m.sender
                        if (!('email' in user)) user.email = ''
                        if (!('nomer' in user)) user.nomer = ''
                        if (!('code' in user)) user.code = ''
                        if (!('wa' in user)) user.wa = ''
                        if (!('nope' in user)) user.nope = ''
                        if (!isNumber(user.codeExpire)) user.codeExpire = 0
                        if (!isNumber(user.attempt)) user.attempt = 0
                        if (!isNumber(user.age)) user.age = -1
                        if (!isNumber(user.regTime)) user.regTime = -1
                        if (!isNumber(user.eregTime)) user.eregTime = -1
                    }
                    if (!isNumber(user.afk)) user.afk = -1
                    if (!('afkReason' in user)) user.afkReason = ''
                    if (!('banned' in user)) user.banned = false
                    if (!('lastBanned' in user)) user.lastBanned = 0
                    if (!('safezone' in user)) user.safezone = false
                    if (!('jail' in user)) user.jail = false
                    if (!('acc' in user)) user.acc = false
                    if (!('premium' in user)) user.premium = false
                    if (!("login" in user)) user.login = false
                    if (!('vip' in user)) user.vip = false
                    if (!('zevent' in user)) user.zevent = false
                    if (!user.acc) user.acc = false
                    if (!user.acc) user.end = false
                    if (!isNumber(user.premiumDate)) user.premiumDate = 0
                    if (!isNumber(user.vipDate)) user.vipDate = 0
                    if (!isNumber(user.zeventDate)) user.zeventDate = 0
                    if (!isNumber(user.bannedDate)) user.bannedDate = 0
                    if (!isNumber(user.lastsafezone)) user.lastsafezone = 0
                    if (!isNumber(user.jailExpired)) user.jailExpired = 0
                    if (!isNumber(user.warn)) user.warn = 0
                    if (!isNumber(user.warning)) user.warning = 0
                    if (!isNumber(user.count)) user.count = 0
                    if (!isNumber(user.level)) user.level = 0
                    if (!('autolevelup' in user)) user.autolevelup = true
                } else global.db.data.users[m.sender] = {
                    exp: 0,
                    limit: 40,
                    joinlimit: 1,
                    spammer: 0,
                    balance: 0,
                    point: 1000,
                    bank: 1000,
                    registered: false,
                    registeredevent: false,
                    name: m.name,
                    husbu: '',
                    waifu: '',
                    location: '',
                    jid: m.sender,
                    email: '',
                    nomer: '',
                    code: '',
                    codeExpire: 0,
                    bannedDate: 0,
                    lastsafezone: 0,
                    jailExpired: 0,
                    attempt: 0,
                    regTime: -1,
                    eregTime: -1,
                    afk: -1,
                    afkReason: '',
                    pasangan: '',
                    guild: '',
                    sahabat: '',
                    banned: false,
                    safezone: false,
                    jail: false,
                    acc: false,
                    premium: false,
                    login: false,
                    zevent: false,
                    acc: 0,
                    end: 0,
                    warn: 0,
                    count: 0,
                    pc: 0,
                    expg: 0,
                    level: 0,
                    autolevelup: true
                }              
                let chat = global.db.data.chats[m.chat]
                if (typeof chat !== 'object') global.db.data.chats[m.chat] = {}
                if (chat) {
                    if (!('isBanned' in chat)) chat.isBanned = false
                    if (!('welcome' in chat)) chat.welcome = true
                    if (!('autoread' in chat)) chat.autoread = false
                    if (!('detect' in chat)) chat.detect = false
                    if (!('sWelcome' in chat)) chat.sWelcome = `Selamat Datang @user`
                    if (!('sBye' in chat)) chat.sBye = `Selamat Tinggal @user`
                    if (!('sPromote' in chat)) chat.sPromote = '@user telah di promote'
                    if (!('sDemote' in chat)) chat.sDemote = '@user telah di demote'
                    if (!('delete' in chat)) chat.delete = true
                    if (!('antiVirtex' in chat)) chat.antiVirtex = false
                    if (!('antiLink' in chat)) chat.antiLink = false
                    if (!('tikauto' in chat)) chat.tikauto = false
                    if (!('captcha' in chat)) chat.captcha = false
                    if (!('antifoto' in chat)) chat.antiFoto = false
                    if (!('antiBot' in chat)) chat.antiBot = false
                    if (!('antiHidetag' in chat)) chat.antiHidetag = false
                    if (!('antividio' in chat)) chat.antiVideo = false
                    if (!('autoJpm' in chat)) chat.autoJpm = false
                    if (!('antiPorn' in chat)) chat.antiPorn = false
                    if (!('antiSpam' in chat)) chat.antiSpam = false
                    if (!('freply' in chat)) chat.freply = false
                    if (!('simi' in chat)) chat.simi = false
                    if (!('ai' in chat)) chat.ai = false
                    if (!('ngetik' in chat)) chat.ngetik = false
                    if (!('autoVn' in chat)) chat.autoVn = false
                    if (!('antiSticker' in chat)) chat.antiSticker = false
                    if (!('stiker' in chat)) chat.stiker = false
                    if (!('antiBadword' in chat)) chat.antiBadword = false
                    if (!('viewonce' in chat)) chat.viewonce = false
                    if (!('useDocument' in chat)) chat.useDocument = false
                    if (!('antiToxic' in chat)) chat.antiToxic = false
                    if (!isNumber(chat.expired)) chat.expired = 0
                } else global.db.data.chats[m.chat] = {
                    isBanned: false,
                    welcome: true,
                    autoread: false,
                    simi: false,
                    ai: false,
                    ngetik: false,
                    autoVn: false,
                    stiker: false,
                    antiSticker: false,
                    antiBadword: false,                    
                    antiSpam: false,
                    detect: false,
                    autoJpm: false,
                    sWelcome: '',
                    sBye: '',
                    sPromote: '@user telah di promote!',
                    sDemote: '@user telah di demote',
                    delete: true,
                    antiLink: false,
                    tikauto: false,
                    captcha: false,
                    antifoto: false,
                    antiBot: false,
                    antiHidetag: false,
                    antividio: false,
                    antiPorn: false
                }
                 let akinator = global.db.data.users[m.sender].akinator
			if (typeof akinator !== 'object')
				global.db.data.users[m.sender].akinator = {}
			if (akinator) {
				if (!('sesi' in akinator))
					akinator.sesi = false
				if (!('server' in akinator))
					akinator.server = null
				if (!('frontaddr' in akinator))
					akinator.frontaddr = null
				if (!('session' in akinator))
					akinator.session = null
				if (!('signature' in akinator))
					akinator.signature = null
				if (!('question' in akinator))
					akinator.question = null
				if (!('progression' in akinator))
					akinator.progression = null
				if (!('step' in akinator))
					akinator.step = null
				if (!('soal' in akinator))
					akinator.soal = null
			} else
				global.db.data.users[m.sender].akinator = {
					sesi: false,
					server: null,
					frontaddr: null,
					session: null,
					signature: null,
					question: null,
					progression: null,
					step: null, 
					soal: null
				}
	     	    let simulator = global.db.data.users[m.sender].simulator 
                if (typeof simulator !== 'object') global.db.data.users[m.sender].simulator = {}
                if (simulator) {
                   if (!isNumber(simulator.toko_mu)) simulator.toko_mu = 0
                   if (!isNumber(simulator.mobil_mu)) simulator.mobil_mu = 0
                   if (!isNumber(simulator.emas_mu)) simulator.emas_mu = 0
                   if (!isNumber(simulator.perhiasan_mu)) simulator.perhiasan_mu = 0
                   if (!isNumber(simulator.makanan_mu)) simulator.makanan_mu = 0
                   if (!isNumber(simulator.minuman_mu)) simulator.minuman_mu = 0
                   if (!isNumber(simulator.warung_mu)) simulator.warung_mu = 0
                   if (!isNumber(simulator.rumah_mu)) simulator.rumah_mu = 0
                   if (!('login' in simulator)) simulator.login = false
                   if (!simulator.login) {
                   if (!('name' in simulator)) simulator.name = m.name
                   if (!('gender' in simulator)) simulator.gender = ''
                   if (!('umur' in simulator)) simulator.umur = ''
                   if (!('profile' in simulator)) simulator.profile = ''
                   if (!('suami' in simulator)) simulator.suami = ''
                   if (!('istri' in simulator)) simulator.istri = ''
                   if (!('tgl_nikah' in simulator)) simulator.tgl_nikah = ''
                   if (!('mas_kawin' in simulator)) simulator.mas_kawin = ''
                   }
                   if (!('status_nikah' in simulator)) simulator.status_nikah = 'belum nikah'
                } else global.db.data.users[m.sender].simulator = {
                   nama: '',
	      	   	   gender: '',
		           umur: '',
			  	   login: false,
			       profile: '',
			       suami: '',
                   istri: '',
                   tgl_nikah: '',
                   status_nikah: 'belum nikah',
                   mas_kawin: '',
                   toko_mu: 0,
                   mobil_mu: 0,
                   emas_mu: 0,
                   perhiasan_mu: 0,
                   makanan_mu: 0,
                   minuman_mu: 0,
                   warung_mu: 0,
                   rumah_mu: 0
                }
                let settings = global.db.data.settings[this.user.jid]
            if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
            if (settings) {
                if (!('self' in settings)) settings.self = false
                if (!('autoread' in settings)) settings.autoread = false
                if (!('composing' in settings)) settings.composing = true
                if (!('restrict' in settings)) settings.restrict = true
                if (!('autorestart' in settings)) settings.autorestart = true
                if (!('gconly' in settings)) settings.gconly = true
                if (!('restartDB' in settings)) settings.restartDB = 0
                if (!isNumber(settings.status)) settings.status = 0 // ini buat data set Status, tambah disini
                if (!('anticall' in settings)) settings.anticall = true
                if (!('clear' in settings)) settings.clear = true
                if (!isNumber(settings.clearTime)) settings.clearTime = 0
                if (!('freply' in settings)) settings.freply = true
                if (!('akinator' in settings)) settings.akinator = {}
            } else global.db.data.settings[this.user.jid] = {
                self: false,
                autoread: false,
                restrict: true,
                autorestart: true,
                composing: true,
                restartDB: 0,
                gconly: true,
                status: 0, // disini juga,
                anticall: true, // anticall on apa off?
                clear: true,
                clearTime: 0,
                freply: true,
                akinator: {}
            }
        } catch (e) {
            console.error(e)
        }           

            const body = typeof m.text == 'string' ? m.text : false
            const isROwner = [conn.decodeJid(global.conn.user.id), ...global.owner.map(([number, isCreator, isDeveloper]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
            const isOwner = isROwner || m.fromMe
            const isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)         
            const isPrems = global.db.data.users[m.sender].premium
            const isVip = global.db.data.users[m.sender].vip
            const isZevent = global.db.data.users[m.sender].zevent
            const isBans = global.db.data.users[m.sender].banned
            if (isROwner) {
            db.data.users[m.sender].premium = true;
            db.data.users[m.sender].premiumDate = "infinity";
            db.data.users[m.sender].limit = "infinity";
            db.data.users[m.sender].moderator = true;
            }
            if (opts['queque'] && m.text && !(isMods || isPrems)) {
                let queque = this.msgqueque, time = 1000 * 5
                const previousID = queque[queque.length - 1]
                queque.push(m.id || m.key.id)
                setInterval(async function () {
                    if (queque.indexOf(previousID) === -1) clearInterval(this)
                    else await delay(time)
                }, time)
            }
            
            db.data.users[m.sender].message += 1;
                        
            if (opts['nyimak']) return
            if (!m.fromMe && !isOwner && !isPrems && !isMods && opts["self"]) return;
            if (opts["autoread"]) await this.readMessages([m.key]);
            if (opts['pconly'] && m.chat.endsWith('g.us')) return       
            if (opts['gconly'] && !m.fromMe && !m.chat.endsWith('g.us') && !isPrems && !isOwner)

return this.sendMessage(m.chat, {
text: '```🚩 Akses Bot Ke Private Chat Di Tolak, Upgrade Premium Hanya Rp 5.000 Agar Bisa Bebas Akses Bot Dengan Hubungi Owner : ```' + `@${nomorown.split("@")[0]}` + '```\n\n• Join Ke Group Official Bot Untuk Free Akses & Informasi Kedepannya Tentang Bot : https://chat.whatsapp.com/KNnjx4iNsKs7QxHjGvqFRZ```',
contextInfo: {
mentionedJid: [m.sender, nomorown],
externalAdReply: { showAdAttribution: true, 
title: `© Kiku-Wabot v5.0.3 (Public Bot)`,
thumbnailUrl: 'https://telegra.ph/file/ef1b7e222b0065e07f969.jpg',
mediaType: 1,
renderLargerThumbnail: true 
}}}, { quoted: m})
            if (opts['swonly'] && m.chat !== 'status@broadcast') return
            if (typeof m.text !== 'string') m.text = ''

            // for (let name in global.plugins) {
            //     let plugin = global.plugins[name]
            //     if (!plugin) continue
            //     if (plugin.disabled) continue
            //     if (!plugin.all) continue
            //     if (typeof plugin.all !== 'function') continue
            //     try {
            //         await plugin.all.call(this, m, chatUpdate)
            //     } catch (e) {
            //         if (typeof e === 'string') continue
            //         console.error(e)
            //     }
            // }

            if (m.isBaileys) return
            if (m.fromMe) return
            m.exp += Math.ceil(Math.random() * 10)

            let usedPrefix
            let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

            const groupMetadata = (m.isGroup ? (conn.chats[m.chat] || {}).metadata : {}) || {}
        //    const groupMetadata = (m.isGroup ? (conn.chats[m.chat].metadata || await conn.groupMetadata(m.chat)): {}) || {}
            const participants = (m.isGroup ? groupMetadata.participants : []) || []
            const user = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) === m.sender) : {}) || {} // User Data
            const bot = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) == this.user.jid) : {}) || {} // Your Data
            const isRAdmin = user && user.admin == 'superadmin' || false
            const isAdmin = isRAdmin || user && user.admin == 'admin' || false // Is User Admin?
            const isBotAdmin = bot && bot.admin || false // Are you Admin?
            for (let name in global.plugins) {
                let plugin = global.plugins[name]
                if (!plugin) continue
                if (plugin.disabled) continue
                if (typeof plugin.all === 'function') {
                    try {
                        await plugin.all.call(this, m, chatUpdate)
                    } catch (e) {
                        // if (typeof e === 'string') continue
                        console.error(e)
                    }
                }
                if (!opts['restrict']) if (plugin.tags && plugin.tags.includes('admin')) {
                    // global.dfail('restrict', m, this)
                    continue
                }
                const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
                let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
                let match = (_prefix instanceof RegExp ? // RegExp Mode?
                    [[_prefix.exec(m.text), _prefix]] :
                    Array.isArray(_prefix) ? // Array?
                        _prefix.map(p => {
                            let re = p instanceof RegExp ? // RegExp in Array?
                                p :
                                new RegExp(str2Regex(p))
                            return [re.exec(m.text), re]
                        }) :
                        typeof _prefix === 'string' ? // String?
                            [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
                            [[[], new RegExp]]
                ).find(p => p[1])
                if (typeof plugin.before === 'function') if (await plugin.before.call(this, m, {
                    match,
                    conn: this,
                    participants,
                    groupMetadata,
                    user,
                    bot,
                    isROwner,
                    isOwner,
                    isRAdmin,
                    isAdmin,
                    isBotAdmin,
                    isPrems,
                    isBans,
                    chatUpdate,
                })) continue
                if (typeof plugin !== 'function') continue
                if (opts && match && m) {
                    let result =
                    ((opts?.["multiprefix"] ?? true) && (match[0] || "")[0]) ||
                    (opts?.["noprefix"] ?? false ? null : (match[0] || "")[0]);
                    usedPrefix = result;
                    let noPrefix = !result ? m.text : m.text.replace(result, "");
                    let [command, ...args] = noPrefix.trim().split` `.filter((v) => v);
                    args = args || [];
                    let _args = noPrefix.trim().split` `.slice(1);
                    let text = _args.join` `;
                    command = (command || "").toLowerCase();
                    let fail = plugin.fail || global.dfail;
                    const prefixCommand = !result
                    ? plugin.customPrefix || plugin.command
                    : plugin.command;
                    let isAccept =
                    (prefixCommand instanceof RegExp && prefixCommand.test(command)) ||
                    (Array.isArray(prefixCommand) &&
                     prefixCommand.some((cmd) =>
                     cmd instanceof RegExp ? cmd.test(command) : cmd === command,
                     )) ||
                    (typeof prefixCommand === "string" && prefixCommand === command);                    
                    m.prefix = !!result;
                    usedPrefix = !result ? "" : result;
                    if (!isAccept) continue
                    conn.sendPresenceUpdate('composing', m.chat)
                    if (!m.isGroup) {
                    let data = await conn.groupMetadata(global.idgc)
                    let link = await conn.groupInviteCode(data.id);
                    let isInGroup = data.participants.some(participant => participant.id === m.sender);
                    db.data.chats[m.chat].isBanned = !isInGroup;
                    if (!isInGroup) {
                    let capt = `Hai @${m.sender.replace(/@.+/g, '')} 👋\n\n`
                    capt += 'Untuk menggunakan bot di private chat, kamu diharuskan untuk bergabung terlebih dahulu ke dalam grup\n\n'
                    capt += 'Dikarenakan sistem kami mendeteksi bahwa kamu belum bergabung ke dalam grup jadi sebaiknya kamu gabung terlebih dahulu 😊'
                    await conn.sendMessageModify(m.chat, capt.trim(), m, {
                    title: 'XTEAM - 2015',
                    thumbnail: 'https://telegra.ph/file/b54ea243e75578de1d4ee.jpg',
                    largeThumb: true,
                    url: `https://chat.whatsapp.com/${link}`
                    });
                    }
                    }
                    m.plugin = name
                    if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
                        let chat = global.db.data.chats[m.chat]
                        let user = global.db.data.users[m.sender]
                        if (name != 'unbanchat.js' && chat && chat.isBanned) return // Except this
                        if (name != 'unbanuser.js' && user && user.banned) return
                    }
                    if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
                        fail('owner', m, this)
                        continue
                    }
                    if (plugin.rowner && !isROwner) { // Real Owner
                        fail('rowner', m, this)
                        continue
                    }
                    if (plugin.owner && !isOwner) { // Number Owner
                        fail('owner', m, this)
                        continue
                    }
                    if (plugin.mods && !isMods) { // Moderator
                        fail('mods', m, this)
                        continue
                    }
                    if (plugin.premium && !isPrems) { // Premium
                        fail('premium', m, this)
                        continue
                    }
                    if (plugin.vip && !isVip) {
                        fail('vip', m, this)
                        continue
                    }
                    if (plugin.banned && !isBans) { // Banned
                        fail('banned', m, this)
                        continue
                    }
                    if (plugin.group && !m.isGroup) { // Group Only
                        fail('group', m, this)
                        continue
                    } else if (plugin.botAdmin && !isBotAdmin) { // You Admin
                        fail('botAdmin', m, this)
                        continue
                    } else if (plugin.admin && !isAdmin) { // User Admin
                        fail('admin', m, this)
                        continue
                    }
                    if (plugin.private && m.isGroup) { // Private Chat Only
                        fail('private', m, this)
                        continue
                    }
                    if (plugin.register == true && _user.registered == false) { // Butuh daftar?
                        fail('unreg', m, this)
                        continue
                    }
                    m.isCommand = true
                    let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17 // XP Earning per command
                    if (xp > 9999999999999999999999) m.reply('Ngecit -_-') // Hehehe
                    else m.exp += xp
                    if (!isPrems && plugin.limit && global.db.data.users[m.sender].limit < plugin.limit * 1) {
                        this.reply(m.chat, `🚩 Limit penggunaan bot mu sudah habis dan akan di reset pada pukul 00.00 WIB\n\nUntuk mendapatkan lebih banyak limit upgrade ke premium kirim *.premium*`, m)
                     //   this.sendButton(m.chat, `Limit anda habis, silahkan beli melalui *${usedPrefix}buyall* atau *${usedPrefix}hadiah*`, author, null, [['Buy Limit', '/buyall'], ['Hadiah', '/hadiah']], m)
                        continue // Limit habis
                    }
                    if (plugin.level > _user.level) {
                        this.reply(m.chat, `diperlukan level ${plugin.level} untuk menggunakan perintah ini. Level kamu ${_user.level}`, m)
                        continue // If the level has not been reached
                    }
                    let extra = {
                        match,
                        usedPrefix,
                        noPrefix,
                        _args,
                        args,
                        body,
                        command,
                        text,
                        conn: this,
                        participants,
                        groupMetadata,
                        user,
                        bot,
                        isROwner,
                        isOwner,
                        isRAdmin,
                        isAdmin,
                        isBotAdmin,
                        isPrems,
                        isBans,
                        chatUpdate,
                    }
                    try {
                        await plugin.call(this, m, extra)
                        if (!isPrems) m.limit = m.limit || plugin.limit || true
                    } catch (e) {
                        // Error occured
                        m.error = e
                        console.error(e)
                        if (e) {
                            let text = util.format(e)
                            for (let key of Object.values(global.APIKeys))
                                text = text.replace(new RegExp(key, 'g'), 'Kemii')
                            if (e.name) for (let [jid] of global.owner.filter(([number, isCreator, isDeveloper]) => isDeveloper && number)) {
                                let data = (await conn.onWhatsApp(jid))[0] || {}
                                if (data.exists) conn.reply(data.jid, `*Plugin:* ${m.plugin}\n*Sender:* ${m.sender}\n*Chat:* ${m.chat}\n*Command:* ${usedPrefix}${command} ${args.join(' ')}\n\n\`\`\`${text}\`\`\``, m)                              
                            }                        
                            conn.reply(m.chat, text, m)
                        }
                    } finally {
                        // m.reply(util.format(_user))
                        if (typeof plugin.after === 'function') {
                            try {
                                await plugin.after.call(this, m, extra)
                            } catch (e) {
                                console.error(e)
                            }
                        }
                       // if (m.limit) m.reply(+ m.limit + ' Limit terpakai')
                    }
                    break
                }
            }
        } catch (e) {
            console.error(e)
        } finally {
            if (opts['queque'] && m.text) {
                const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)
                if (quequeIndex !== -1) this.msgqueque.splice(quequeIndex, 1)
            }
            //console.log(global.db.data.users[m.sender])
            let user, stats = global.db.data.stats
            if (m) {
                if (m.sender && (user = global.db.data.users[m.sender])) {
                    user.exp += m.exp
                    user.limit -= m.limit * 1
                }

                let stat
                if (m.plugin) {
                    let now = + new Date
                    if (m.plugin in stats) {
                        stat = stats[m.plugin]
                        if (!isNumber(stat.total)) stat.total = 1
                        if (!isNumber(stat.success)) stat.success = m.error != null ? 0 : 1
                        if (!isNumber(stat.last)) stat.last = now
                        if (!isNumber(stat.lastSuccess)) stat.lastSuccess = m.error != null ? 0 : now
                    } else stat = stats[m.plugin] = {
                        total: 1,
                        success: m.error != null ? 0 : 1,
                        last: now,
                        lastSuccess: m.error != null ? 0 : now
                    }
                    stat.total += 1
                    stat.last = now
                    if (m.error == null) {
                        stat.success += 1
                        stat.lastSuccess = now
                    }
                }
            }

            try {
             require('./lib/print')(m, this)
             } catch (e) {
             console.log(String(e))
             }             
             if (opts["autoread"])
             await this.chatRead(
             m.chat,
             m.isGroup ? m.sender : undefined,
             m.id || m.key.id,
             ).catch(() => {});
          }
    },
    async participantsUpdate({ id, participants, action, m }) {
        if (opts['self']) return
        // if (id in conn.chats) return // First login will spam
        if (global.isInit) return
        let chat = global.db.data.chats[id] || {}
        let text = ''
        switch (action) {
            case 'add':
            case 'remove':
            if (chat.welcome) {
                let groupMetadata = await this.groupMetadata(id) || (conn.chats[id] || {}).metadata
                for (let user of participants) {
						let pp = 'https://telegra.ph/file/24fa902ead26340f3df2c.png'
						let ppgc = 'https://telegra.ph/file/24fa902ead26340f3df2c.png'
						let gcname = groupMetadata.subject
						try {
							pp = await this.profilePictureUrl(user, 'image')
							ppgc = await this.profilePictureUrl(id, 'image') 
						} catch (e) {} finally {
							text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user!').replace('@subject', await this.getName(id)).replace('@desc', groupMetadata.desc ? String.fromCharCode(8206).repeat(4001) + groupMetadata.desc : '') :
								(chat.sBye || this.bye || conn.bye || 'Bye, @user!')).replace(/@user/g, '@' + user.split`@`[0])
							let wel = pp
							let lea = pp
						    this.sendMessage(id, {
                            text: text,
                            contextInfo: {
                            mentionedJid: [user],
                            externalAdReply: {
                            showAdAttribution: true,
                            title: 'DCODEKEMII',
                            thumbnailUrl: pp,
                            sourceUrl: 'https://chat.whatsapp.com/FDf5DkIdNOLHNiRO6eh5s3',
                            mediaType: 1,
                            renderLargerThumbnail: true
                            }}}, {quoted: null})
                        }
						
					}
            }
                break                          
        case 'promote':
            text = (chat.sPromote || this.spromote || conn.spromote || '@user ```is now Admin```')
        case 'demote':
            if (!text)
                text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ```is no longer Admin```')
            text = text.replace('@user', '@' + participants[0].split('@')[0])
            if (chat.detect)
                this.sendMessage(id, { text, mentions: this.parseMention(text) })
            break
        }
    },
  async onCall(json) {
    if (!db.data.settings[this.user.jid].anticall) return
    let jid = json[2][0][1]['from']
    let isOffer = json[2][0][2][0][0] == 'offer'
    let users = global.db.data.users
    let user = users[jid] || {}
    if (user.whitelist) return
    if (jid && isOffer) {
      const tag = this.generateMessageTag()
      const nodePayload = ['action', 'call', ['call', {
        'from': this.user.jid,
        'to': `${jid.split`@`[0]}@s.whatsapp.net`,
        'id': tag
      }, [['reject', {
        'call-id': json[2][0][2][0][1]['call-id'],
        'call-creator': `${jid.split`@`[0]}@s.whatsapp.net`,
        'count': '0'
      }, null]]]]
      this.sendJSON(nodePayload, tag)
      m.reply(`Kamu dibanned karena menelepon bot, owner : @${owner[0]}`)
    }
  },
  async GroupUpdate({ jid, desc, descId, descTime, descOwner, announce }) {
    if (!db.data.chats[jid].desc) return
    if (!desc) return
    let caption = `
    @${descOwner.split`@`[0]} telah mengubah deskripsi grup.
    ${desc}
        `.trim()
    this.sendMessage(jid, caption, wm, m)

  }
},

/*
conn.ws.on('CB:call', async (json) => {
    console.log(json.content)
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
    let pa7rick = await conn.sendContact(callerId, global.owner)
    conn.sendMessage(callerId, { text: `Sistem otomatis block!\nJangan menelpon bot!\nSilahkan Hubungi Owner Untuk Dibuka !`}, { quoted : pa7rick })
    await sleep(8000)
    await conn.updateBlockStatus(callerId, "block")
    }
    })
async onCall(json) {
    let { from } = json[2][0][1]
    let users = global.db.data.users
    let user = users[from] || {}
    if (user.whitelist) return
    switch (this.callWhitelistMode) {
      case 'mycontact':
        if (from in this.contacts && 'short' in this.contacts[from])
          return
        break
    }
    await this.sendMessage(from, 'Maaf, karena anda menelfon bot. anda diblokir otomatis', MessageType.extendedText)
    await this.updateBlockStatus(from, 'block')
  }
}
*/

global.dfail = (type, m, conn) => {
    let userss = global.db.data.users[m.sender]
    let imgr = 'https://telegra.ph/file/0b32e0a0bb3b81fef9838.jpg'
    let msg = {
        rowner: Func.Styles('Sorry, this command can only be used by the real owner.'),
		owner: Func.Styles('Sorry, this command can only be used by the owner.'),		
		mods: Func.Styles('Sorry, this command can only be used by moderator.'),
		premium: Func.Styles('Sorry, this command is for premium users only.'),
		group: Func.Styles('Sorry, this command can only be used in groups.'),
		vip: Func.Styles('Sorry, this command is for vip users only.'),
		private: Func.Styles('Sorry, this command can only be used in Private Chat.'),
		admin: Func.Styles('Sorry, this command is only for group admins.'),
		botAdmin: Func.Styles('Make the bot an Admin to use this command.'),
        restrict: Func.Styles('This feature is disabled.')
    }[type]
    if (msg) return conn.reply(m.chat, msg, m)    
    let msgg = {
       unreg: 'ʜᴇʟʟᴏ ᴛᴏ ᴄᴏɴᴛɪɴᴜᴇ ᴜꜱɪɴɢ ᴛʜᴇ ʙᴏᴛ, ᴘʟᴇᴀꜱᴇ ʀᴇɢɪꜱᴛᴇʀ ꜰɪʀꜱᴛ.\nʜᴏᴡ ᴛᴏ ʀᴇɢɪꜱᴛᴇʀ?\n\n*ᴇxᴀᴍᴘʟᴇ:* .ʀᴇɢɪꜱᴛᴇʀ'
    }[type]
    if (msgg) return m.reply(msgg)
    let msg3 = {
        zevent: `${nmsr}\n\nPerintah ini hanya dapat digunakan saat event*!`
    }[type]
    if (msg3) return m.reply(msg3)
}

// Fix Delay
let handler = {}
handler.run = async (m, chat, args) => {
  fixdelay.fixDelay(conn, m)
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright("Update 'handler.js'"))
    delete require.cache[file]
    if (global.reloadHandler) console.log(global.reloadHandler())
})