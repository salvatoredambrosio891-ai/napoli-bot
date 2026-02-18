const axios = require("axios")
if (command === "notizie") {

try {
const response = await axios.get("https://newsapi.org/v2/everything?q=SSC%20Napoli&language=it&apiKey=METTI_LA_TUA_API_KEY")

let articles = response.data.articles.slice(0, 3)

let text = "📰 *ULTIME NOTIZIE NAPOLI* 💙\n\n"

articles.forEach((a, i) => {
text += `${i+1}. ${a.title}\n${a.url}\n\n`
})

await sock.sendMessage(msg.key.remoteJid, { text })

} catch (err) {
await sock.sendMessage(msg.key.remoteJid, { text: "Errore notizie 😢" })
}
}