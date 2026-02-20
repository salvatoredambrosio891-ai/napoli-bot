import axios from 'axios';

let handler = async (m, { conn }) => {

  try {

    const res = await axios.get('https://api.football-data.org/v4/teams/113/matches?status=SCHEDULED&limit=1', {
      headers: { 'X-Auth-Token': 'abc123xyz456' }
    });

    const match = res.data.matches[0];

    let casa = match.homeTeam.name;
    let trasferta = match.awayTeam.name;
    let data = match.utcDate;

    let partita = `
⚽ *Prossima Partita Napoli*

🏟️ ${casa} vs ${trasferta}
📅 ${new Date(data).toLocaleDateString('it-IT')}
🕒 ${new Date(data).toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' })}
`;

    conn.sendMessage(m.chat, { text: partita });

  } catch (e) {
    conn.sendMessage(m.chat, { text: '❌ Errore nel caricare la partita.' });
  }

}

handler.help = ['partita']
handler.tags = ['napoli']
handler.command = /^(partita)$/i;

export default handler;