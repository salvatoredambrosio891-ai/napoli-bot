import axios from 'axios';

let handler = async (m, { conn }) => {

  try {

    const res = await axios.get('https://api.football-data.org/v4/competitions/SA/standings', {
      headers: { 'X-Auth-Token': 'abc123xyz456' }
    });

    const standings = res.data.standings[0].table;

    let testo = '📊 *Classifica Serie A* 📊\n\n';

    standings.forEach((team, i) => {
      testo += `${i + 1}️⃣ ${team.team.name

handler.help = ['classifica']
handler.tags = ['napoli']
handler.command = ['classificaa']

export default handler