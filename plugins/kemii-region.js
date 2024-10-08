let handler = async(m, { conn, text }) => {
	let code = {
    "61": "Australia",
    "674": "Nauru",
    "675": "Papua Nugini",
    "677": "Kepulauan Solomon",
    "678": "Vanuatu",
    "679": "Fiji",
    "680": "Palau",
    "681": "Wallis dan Futuna",
    "682": "Cook Islands",
    "683": "Niue",
    "684": "Samoa",
    "685": "Samoa Amerika",
    "686": "Kiribati",
    "687": "Kaledonia Baru",
    "688": "Tuvalu",
    "689": "Prancis Polinesia",
    "690": "Tokelau",
    "691": "Micronesia",
    "692": "Marshall Islands",
    "63": "Filipina",
    "93": "Afganistan",
    "54": "Argentina",
    "242": "Bahamas",
    "246": "Barbados",
    "501": "Belize",
    "229": "Benin",
    "55": "Brasil",
    "56": "Chile",
    "57": "Kolombia",
    "506": "Costa Rica",
    "53": "Kuba",
    "1767": "Dominika",
    "1809": "Republik Dominika",
    "593": "Ekuador",
    "503": "El Salvador",
    "500": "Kepulauan Falkland",
    "299": "Greenland",
    "1473": "Grenada",
    "502": "Guatemala",
    "592": "Guyana",
    "509": "Haiti",
    "504": "Honduras",
    "1876": "Jamaika",
    "52": "Meksiko",
    "505": "Nikaragua",
    "507": "Panama",
    "595": "Paraguay",
    "51": "Peru",
    "1787": "Puerto Rico",
    "869": "Saint Kitts dan Nevis",
    "1758": "Saint Lucia",
    "1784": "Saint Vincent dan Grenadines",
    "597": "Suriname",
    "1869": "Trinidad dan Tobago",
    "1": "Amerika Serikat",
    "598": "Uruguay",
    "58": "Venezuela",
    "213": "Aljazair",
    "244": "Angola",
    "267": "Botswana",
    "226": "Burkina Faso",
    "257": "Burundi",
    "237": "Kamerun",
    "238": "Cape Verde",
    "236": "Republik Afrika Tengah",
    "235": "Chad",
    "269": "Comoros",
    "243": "Kongo",
    "253": "Djibouti",
    "20": "Mesir",
    "240": "Guinea Khatulistiwa",
    "291": "Eritrea",
    "251": "Ethiopia",
    "241": "Gabon",
    "220": "Gambia",
    "233": "Ghana",
    "224": "Guinea",
    "245": "Guinea-Bissau",
    "254": "Kenya",
    "266": "Lesotho",
    "231": "Liberia",
    "218": "Libya",
    "261": "Madagaskar",
    "265": "Malawi",
    "223": "Mali",
    "222": "Mauritania",
    "230": "Mauritius",
    "212": "Maroko",
    "258": "Mozambik",
    "264": "Namibia",
    "227": "Niger",
    "234": "Nigeria",
    "250": "Rwanda",
    "239": "Sao Tome dan Principe",
    "221": "Senegal",
    "248": "Seychelles",
    "232": "Sierra Leone",
    "252": "Somalia",
    "27": "Afrika Selatan",
    "211": "Sudan Selatan",
    "249": "Sudan",
    "268": "Swaziland",
    "255": "Tanzania",
    "228": "Togo",
    "216": "Tunisia",
    "256": "Uganda",
    "260": "Zambia",
    "263": "Zimbabwe",
    "355": "Albania",
    "376": "Andorra",
    "43": "Austria",
    "32": "Belgia",
    "387": "Bosnia dan Herzegovina",
    "359": "Bulgaria",
    "385": "Kroasia",
    "357": "Siprus",
    "420": "Ceko",
    "45": "Denmark",
    "372": "Estonia",
    "358": "Finlandia",
    "33": "Prancis",
    "49": "Jerman",
    "30": "Yunani",
    "36": "Hungaria",
    "354": "Islandia",
    "353": "Irlandia",
    "39": "Italia",
    "383": "Kosovo",
    "371": "Latvia",
    "423": "Liechtenstein",
    "370": "Lituania",
    "352": "Luxembourg",
    "389": "Makedonia Utara",
    "356": "Malta",
    "373": "Moldova",
    "377": "Monaco",
    "382": "Montenegro",
    "31": "Belanda",
    "47": "Norwegia",
    "48": "Polandia",
    "351": "Portugal",
    "40": "Rumania",
    "7": "Rusia",
    "378": "San Marino",
    "381": "Serbia",
    "421": "Slowakia",
    "386": "Slovenia",
    "34": "Spanyol",
    "46": "Swedia",
    "41": "Swiss",
    "90": "Turki",
    "380": "Ukraina",
    "44": "Britania Raya",
    "379": "Vatican City",
    "994": "Azerbaijan",
    "973": "Bahrain",
    "880": "Bangladesh",
    "975": "Bhutan",
    "673": "Brunei",
    "95": "Myanmar (Burma)",
    "855": "Kamboja",
    "86": "China",
    "357": "Siprus",
    "995": "Georgia",
    "91": "India",
    "62": "Indonesia",
    "98": "Iran",
    "964": "Iraq",
    "972": "Israel",
    "81": "Jepang",
    "962": "Jordan",
    "7": "Kazakhstan",
    "850": "Korea Utara",
    "82": "Korea Selatan",
    "965": "Kuwait",
    "996": "Kyrgyzstan",
    "856": "Laos",
    "961": "Lebanon",
    "60": "Malaysia",
    "960": "Maldives",
    "976": "Mongolia",
    "977": "Nepal",
    "968": "Oman",
    "92": "Pakistan",
    "970": "Palestina",
    "974": "Qatar",
    "966": "Saudi Arabia",
    "65": "Singapura",
    "94": "Sri Lanka",
    "963": "Suriah",
    "886": "Taiwan",
    "992": "Tajikistan",
    "66": "Thailand",
    "670": "Timor-Leste",
    "993": "Turkmenistan",
    "971": "Uni Emirat Arab",
    "998": "Uzbekistan",
    "84": "Vietnam",
    "967": "Yaman"
}

let participants = (await conn.groupMetadata(m.chat)).participants.map(v => v.id) 
let result = {}
let other = []
let tags = []
for(let user of participants) {
	let from = Object.keys(code).filter(v => user.startsWith(v))
	let region = result[code[from[0]]] || []
	if(from.length) {
		region.push(user) 
		result[code[from[0]]] = region
		} else { other.push(user) }
	}
	let teks = `『 *Region of Member* 』\n\n`+(Object.keys(result).map(v => `${v} (${result[v].length}):\n${result[v].map(v => "- @"+v.split("@")[0]).join("\n")}`)).join("\n\n")+(other.length ? (`\n\nOther (${other.length}):\n`+other.map(v => "- @"+v.split("@")[0]).join("\n")) : '') 
	await conn.reply(m.chat, teks, m)
}
	
handler.command = handler.help = ["region"]
handler.tags = ["group"]
handler.group = true
handler.admin = true

module.exports = handler