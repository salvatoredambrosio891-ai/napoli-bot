let handler = async (m, { conn }) => {
  const classifica = `
📊 *Classifica Serie A 2025/26* 📊

1️⃣ Inter – 61 pt
2️⃣ Milan – 54 pt
3️⃣ Napoli – 50 pt
4️⃣ Roma – 47 pt
5️⃣ Juventus – 46 pt
6️⃣ Como – 42 pt
7️⃣ Atalanta – 42 pt
8️⃣ Bologna – 33 pt
9️⃣ Lazio – 33 pt
🔟 Sassuolo – 32 pt
11️⃣ Udinese – 32 pt
12️⃣ Parma – 29 pt
13️⃣ Cagliari – 28 pt
14️⃣ Torino – 27 pt
15️⃣ Cremonese – 24 pt
16️⃣ Genoa – 24 pt
17️⃣ Lecce – 24 pt
18️⃣ Fiorentina – 21 pt
19️⃣ Pisa – 15 pt
2️⃣0️⃣ Hellas Verona – 15 pt
`;

  conn.sendMessage(m.chat, { text: classifica });


handler.help = ['classifica']
handler.tags = ['napoli']
handler.command = ['classificaseriea']

export default handler