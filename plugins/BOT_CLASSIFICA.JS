import fetch from 'node-fetch';

let handler = async (m, { conn }) => {
  try {
    let res = await fetch('https://api-football-standings.azharimm.dev/leagues/ita.1/standings')
    let json = await res.json()
    let table = json.data.standings

    let testo = "🏆 CLASSIFICA SERIE A 2025/2026\n\n"
    table.forEach((team, i) => {
      testo += `${i+1}. ${team.team.displayName} — ${team.stats.find(s => s.name==='points').value} Pt\n`
    })

    conn.sendMessage(m.chat, { text: testo }, { quoted: m })
  } catch (err) {
    console.log(err)
    conn.sendMessage(m.chat, { text: "❌ Errore nel caricare la classifica." }, { quoted: m })
  }
}

handler.help = ['classifica']
handler.tags = ['napoli']
handler.command = ['classifica']

export default handler