import axios from 'axios'

let handler = async (m, { conn }) => {
  try {
    const response = await axios.get(
      'https://api.football-data.org/v4/competitions/SA/standings',
      {
        headers: { 'X-Auth-Token': '3fe62c0539d94f5f9f6e649015ff7b61' }
      }
    )

    const standings = response.data.standings[0].table
    let testo = '🏆 CLASSIFICA SERIE A 🇮🇹\n\n'

    standings.forEach(team => {
      testo += `${team.position}. ${team.team.name} - ${team.points} pt\n`
    })

    conn.sendMessage(m.chat, { text: testo })

  } catch (err) {
    conn.sendMessage(m.chat, { text: '❌ Errore nel caricare la classifica.' })
  }
}

handler.help = ['classifica']
handler.tags = ['calcio']
handler.command = ['serieaclassifica']

export default handler