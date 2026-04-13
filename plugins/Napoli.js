// plugins/partita.js
let handler = async (m, { conn }) => {
  try {
    // 🔹 Qui cambi tu la prossima partita
    let prossimaPartita = `
⚽ *Prossima Partita Napoli*
🏟️ Napoli vs Lazio 
📅 18 aprile 2026
🕒 18:00
`;

    return conn.sendMessage(m.chat, { text: prossimaPartita });

  } catch (e) {
    console.error(e);
    return conn.sendMessage(m.chat, { text: '❌ Errore nel caricare la partita.' });
  }
};

handler.help = ['partita']
handler.tags = ['napoli']
handler.command = /^(partita)$/i;

export default handler;