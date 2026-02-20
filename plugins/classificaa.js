let handler = async (m, { conn }) => {

let classifica = `
    ╔══════════════════╗
         🏆 SERIE A 🇮🇹
    ╚══════════════════╝

🔝 ZONA CHAMPIONS
🥇 Inter        61 pt  (+39)
🥈 Milan        54 pt  (+22)
🥉 Napoli       50 pt  (+13)
4️⃣  Roma       47 pt  (+15)

⭐ ZONA EUROPA
5️⃣  Juventus   46 pt
6️⃣  Atalanta   42 pt
7️⃣  Como       42 pt

📊 META CLASSIFICA
8️⃣  Sassuolo   35 pt
9️⃣  Bologna    33 pt
🔟 Lazio       33 pt
11️⃣ Udinese    32 pt
12️⃣ Parma      29 pt
13️⃣ Cagliari   28 pt
14️⃣ Torino     27 pt
15️⃣ Genoa      24 pt
16️⃣ Cremonese  24 pt
17️⃣ Lecce      24 pt

🔻 RETROCESSIONE
18️⃣ Fiorentina 21 pt
19️⃣ Pisa       15 pt
20️⃣ Verona     12 pt

    ═══════════════════
`

conn.sendMessage(m.chat, { text: classifica })

}

handler.help = ['classifica']
handler.tags = ['napoli']
handler.command = ['classificabot']

export default handler