// plugins/kenny.js
import fs from 'fs'

let handler = async (m, { conn }) => {
  try {

    let audio = fs.readFileSync('./audio/kenny.mp3')

    await conn.sendMessage(m.chat, {
      audio: audio,
      mimetype: 'audio/mp4',
      ptt: true
    })

  } catch (e) {
    console.error(e)
    return conn.sendMessage(m.chat, { text: '❌ Errore nel caricare il vocale di Kenny.' })
  }
}

handler.help = ['kenny']
handler.tags = ['fun']
handler.command = /^(kenny)$/i

export default handler