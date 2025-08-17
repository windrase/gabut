/*

  ! Leak by YouTube : verlangid
  
*/

const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")

//~~~~~~~~~~~ Settings Bot ~~~~~~~~~~~//
global.owner = '62'
global.versi = "6.0.0"
global.namaOwner = "Skyzopedia"
global.packname = 'Bot WhatsApp'
global.botname = 'Simple Bot Skyzopedia'
global.botname2 = 'Simple Bot'

//~~~~~~~~~~~ Settings Link ~~~~~~~~~~//
global.linkOwner = "https://wa.me/6283848833500"
global.linkWebsite = "https://restapi.simplebot.my.id"
global.linkGrup = "https://chat.whatsapp.com/IxFLeeAIZYI38SYRYrUlLL"

//~~~~~~~~~~~ Settings Jeda ~~~~~~~~~~//
global.delayJpm = 3500
global.delayPushkontak = 6000

//~~~~~~~~~~ Settings Saluran ~~~~~~~~~//
global.linkSaluran = "https://whatsapp.com/channel/0029VaSaXJaCsU9MBxDjyt1P"
global.idSaluran = "120363254526002326@newsletter"
global.namaSaluran = "Skyzopedia [ Testimoni ]"

//~~~~~~~~~ Settings Orderkuota ~~~~~~~~//
global.pinH2H = "6788"
global.passwordH2H = "g4syuk"
global.merchantIdOrderKuota = "OK931165"
global.apiOrderKuota = "33021431731514001931165OKCT2CE38BA3DC4C870D9094147332FCEF80"
global.qrisOrderKuota = "00020101021126670016COM.NOBUBANK.WWW01189360050300000879140214135152866177810303UMI51440014ID.CO.QRIS.WWW0215ID20232438849050303UMI5204511153033605802ID5908MRWIBUSS6013JAKARTA TIMUR61051311062070703A0163043C15"

//~~~~~~~~~~ Settings Apikey ~~~~~~~~~~//
global.apiDigitalOcean = "-"
global.apiSimpleBot = "new2025" // new api jika diganti cek saluran verlang untuk update api

//~~~~~~~~~ Settings Payment ~~~~~~~~~//
global.dana = "Tidak Tersedia"
global.ovo = "Tidak Tersedia"
global.gopay = "Tidak Tersedia"

//~~~~~~~~~~ Settings Image ~~~~~~~~~~//
global.image = {
menu: "https://img102.pixhost.to/images/154/557707527_skyzopedia.jpg", 
reply: "https://img102.pixhost.to/images/154/557707527_skyzopedia.jpg", 
logo: "https://img102.pixhost.to/images/154/557707527_skyzopedia.jpg", 
qris: "https://img0.pixhost.to/images/915/557749762_skyzopedia.jpg"
}

//~~~~~ Settings Api Panel Buy Panel ~~~~~//
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://-"
global.apikey = "ptla_bWNQIJpKJkPERlnQs8p2UUIZUYrTF0mESeTO7UM1z" //ptla
global.capikey = "ptlc_e5HDwnIfiUDyDNst8501HOu0aeuSWxMmxKFWRyOjc" //ptlc

//~~~~~~~ Settings Api Subdomain ~~~~~~~//
global.subdomain = {
"serverku.biz.id": {
"zone": "4e4feaba70b41ed78295d2dcc090dd3a", 
"apitoken": "d6kmqwlvi0qwCyMxoGuc3EBAYRYvbulhjhR9T0I7"
}, 
"privatserver.my.id": {
"zone": "699bb9eb65046a886399c91daacb1968", 
"apitoken": "fnl7ixlJ-Y-7zxJ7EUGEXitfmfLiPGW985iXobdu"
}, 
"panelwebsite.biz.id": {
"zone": "2d6aab40136299392d66eed44a7b1122", 
"apitoken": "ImdyjF7XVU7ObDbdCr7LwSUZ4eDQJ-QozAbUIWoF"
}, 
"mypanelstore.web.id": {
"zone": "c61c442d70392500611499c5af816532", 
"apitoken": "ImdyjF7XVU7ObDbdCr7LwSUZ4eDQJ-QozAbUIWoF"
}, 
"pteroserver.us.kg": {
"zone": "f693559a94aebc553a68c27a3ffe3b55", 
"apitoken": "ImdyjF7XVU7ObDbdCr7LwSUZ4eDQJ-QozAbUIWoF"
}, 
"digitalserver.us.kg": {
"zone": "df13e6e4faa4de9edaeb8e1f05cf1a36", 
"apitoken": "ImdyjF7XVU7ObDbdCr7LwSUZ4eDQJ-QozAbUIWoF"
}, 
"shopserver.us.kg": {
"zone": "54ca38e266bfdf2dcdb7f51fd79c2db5", 
"apitoken": "ImdyjF7XVU7ObDbdCr7LwSUZ4eDQJ-QozAbUIWoF"
}
}

//~~~~~~~~~~ Settings Message ~~~~~~~~//
global.mess = {
	owner: "*[ Akses Ditolak ]*\nFitur ini hanya untuk owner bot!",
	admin: "*[ Akses Ditolak ]*\nFitur ini hanya untuk admin grup!",
	botAdmin: "*[ Akses Ditolak ]*\nFitur ini hanya untuk ketika bot menjadi admin!",
	group: "*[ Akses Ditolak ]*\nFitur ini hanya untuk dalam grup!",
	private: "*[ Akses Ditolak ]*\nFitur ini hanya untuk dalam private chat!",
	prem: "*[ Akses Ditolak ]*\nFitur ini hanya untuk user premium!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
