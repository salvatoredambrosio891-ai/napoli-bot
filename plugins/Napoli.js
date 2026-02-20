let handler = async (m, { conn, usedPrefix, command }) => {
    // Messaggio della partita
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

    // Invia il messaggio nel gruppo
    await conn.sendMessage(m.chat, { text: testo });
};

// Imposta il comando
handler.command = /^(partita)$/i;
handler.group = true; // Funziona solo nei gruppi
export default handler;