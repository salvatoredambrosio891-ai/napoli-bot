let handler = async (m, { conn }) => {

  conn.sendMessage(m.chat, {
    text: "⚽ Napoli vs Atalanta\n🗓️ 22 Febbraio\n🕒 15:00"
  })

}

handler.help = ['partita']
handler.tags = ['napoli']
handler.command = ['partita']

module.exports = handler