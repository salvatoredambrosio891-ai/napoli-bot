// plugins/kenny.js
import fs from 'fs';
import path from 'path';

let handler = async (m, { conn }) => {
  try {
    // Percorso al file vocale
    const audioPath = path.join(process.cwd(), 'audio', 'kenny.mp3');

    // Legge il file audio
    let audio = fs.readFileSync(audioPath);

    // Invia il vocale su WhatsApp
    await conn.sendMessage(m.chat, {
      audio: audio,
      mimetype: 'audio/mp4',
      ptt: true // true = invia come vocale
    });

  } catch (e) {
    console.error(e);
    // Se c'è errore, manda messaggio di fallback
    return conn.sendMessage(m.chat, { text: '❌ Errore nel caricare il vocale di Kenny.' });
  }
}

// Info comandi
handler.help = ['kenny'];
handler.tags = ['fun'];
handler.command = /^(kenny)$/i;

export default handler;