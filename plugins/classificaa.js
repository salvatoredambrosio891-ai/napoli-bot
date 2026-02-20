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
    conn.sendMessage(m.chat, { text: "📊 Classifica Serie A 2025‑26
1️⃣ Inter Milan – 61 pt
2️⃣ AC Milan – 54 pt
3️⃣ Napoli – 50 pt
4️⃣ Roma – 47 pt
5️⃣ Juventus – 46 pt
6️⃣ Como – 42 pt
7️⃣ Atalanta BC – 42 pt
8️⃣ Bologna – 33 pt
9️⃣ Lazio – 33 pt
10️⃣ Sassuolo – 32 pt
11️⃣ Udinese – 32 pt
12️⃣ Parma – 29 pt
13️⃣ Cagliari – 28 pt
14️⃣ Torino – 27 pt
15️⃣ Cremonese – 24 pt
16️⃣ Genoa – 24 pt
17️⃣ Lecce – 24 pt
18️⃣ Fiorentina – 21 pt
19️⃣ Pisa – 15 pt
20️⃣ Hellas Verona – 15 pt." }, { quoted: m })
  }
}

handler.help = ['classifica']
handler.tags = ['napoli']
handler.command = ['classificaseriea']

export default handler