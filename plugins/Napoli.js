let handler = async (m, { conn }) => {

conn.sendMessage(m.chat, {
text: `
🔥💙 *FORZA NAPOLI!* 💙🔥

⚽ *Prossima Partita* ⚽
🏟 Stadio: ${stadio}
🆚 Avversario: ${avversario}
📅 Data: ${data}
⏰ Ora: ${ora}

💪 Tutti pronti a tifare per il nostro Napoli!
💙🤍 *#ForzaNapoliSempre* 🤍💙
`
})

}

handler.command = ['partita']
export default handler