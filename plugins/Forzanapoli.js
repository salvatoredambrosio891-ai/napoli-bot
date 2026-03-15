// plugins/forzaNapoli.js
let handler = async (m, { conn }) => {
  try {
    let forzaNapoli = `
*Forza Napoli, sempre avanti💙⚽!*
`;

    return conn.sendMessage(m.chat, { text: forzaNapoli });

  } catch (e) {
    console.error(e);
    return conn.sendMessage(m.chat, { text: '❌ Errore nell\'invio del grido!' });
  }
};

handler.help = ['forzaNapoli']
handler.tags = ['napoli']
handler.command = /^\forzaNapoli$/i; // qui il punto è incluso

export default handler;