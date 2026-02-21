const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
  try {

    let response = await fetch(
      'https://api.football-data.org/v4/competitions/SA/standings',
      {
        headers: { 'X-Auth-Token': 'abc123xyz456' }
      }
    )

    let data = await response.json()
    let table = data.standings[0].table

    let text = '🏆 CLASSIFICA SERIE A 🏆\n\n'

    table.forEach(team => {
      text += `${team.position}. ${team.team.name}\n`
      text += `Punti: ${team.points}\n`
      text += `Partite: ${team.playedGames}\n`
      text += `---------------------\n`
    })

    conn.sendMessage(m.chat, { text })

  } catch (error) {
    conn.sendMessage(m.chat, { text: '❌ Errore nel caricare la classifica.' })
  }
}

handler.help = ['classifica']
handler.tags = ['calcio']
handler.command = ['.classificabot']

module.exports = handler