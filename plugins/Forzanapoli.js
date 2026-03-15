// plugins/forzaNapoli.js
let handler = async (m, { conn }) => {
  try {
    let forzaNapoli = `
💙💙 *SEMPRE FORZA NAPOLI!* 💙💙
⚽ Sempre avanti, azzurri! ⚽
🔥 Non mollare mai! 🔥
💪 Grinta, passione e vittoria! 💪
`;

    return conn.sendMessage(m.chat, { text: forzaNapoli });

  } catch (e) {
    console.error(e);
    return conn.sendMessage(m.chat, { text: '❌ Errore nell\'invio del grido!' });
  }
};

handler.help = ['forzaNapoli'];
handler.tags = ['napoli'];
handler.command = /^(forzanapoli)$/i;

export default handler;