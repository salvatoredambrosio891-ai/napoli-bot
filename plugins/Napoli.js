let handler = async (m, { conn }) => {

let testo = `
🔥💙 *FORZA NAPOLI!* 💙🔥

⚽ *Prossima Partita* ⚽
🏟 Stadio: New Balance Arena
🆚 Avversario: Atalanta
📅 Data: 22 Febbraio 2026
⏰ Ora: 15:00

💪 Tutti pronti a tifare per il nostro Napoli!
💙🤍 *#ForzaNapoliSempre* 🤍💙
`;

await conn.reply(m.chat, testo, m);

};

handler.help = ['partita']
handler.tags = ['napoli']
handler.command = /^(partita)$/i;

export default handler;