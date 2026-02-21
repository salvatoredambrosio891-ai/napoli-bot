const handler = async (m, { conn }) => {
  const text = `
╭━〔 *🌐 CANALI UFFICIALI* 〕━┈⊷
┃─────────────·๏
┃✨ *Napoli* 
┃🔗 https://whatsapp.com/channel/0029VbBVRIl9Gv7ZcEAhey2g
┃
┃🤖 *Napoli-Bot*
┃🔗 https://whatsapp.com/channel/0029VbBVRIl9Gv7ZcEAhey2g
┃
┃🌍 *Napoli-Bot Server*
┃🔗  https://whatsapp.com/channel/0029VbBVRIl9Gv7ZcEAhey2g
┃╰─────────────·๏
╰━━━━━━━━━━━━━━━━━━━⊷

*Unisciti ai nostri canali per restare aggiornato, ricevere supporto e scoprire tutte le novità!*

💎 _Powered by Napoli-Bot 
`.trim();

  await conn.sendMessage(m.chat, {
    text,
    footer: 'Scegli un canale e unisciti!'
  }, { quoted: m });
};

handler.help = ['canali'];
handler.tags = ['info'];
handler.command = /^canali$/i;

export default handler;
