import pkg from '@whiskeysockets/baileys'
const { generateWAMessageFromContent } = pkg

let handler = async (m, { conn }) => {
  // vCard primo contatto
  let vcard1 = `BEGIN:VCARD
VERSION:3.0
FN: Salvatore 
ORG: Salvatore
TEL;type=CELL;type=VOICE;waid=‪393336413960:‪+39 333 641 3960
END:VCARD`


  

  // primo invio -> entrambi i contatti insieme
  await conn.sendMessage(m.chat, {
    contacts: {
      displayName: "Owners",
      contacts: [
        { vcard: vcard1 },

      ]
    }
  }, { quoted: m })

  // secondo invio -> messaggio CTA URL con più bottoni
  let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        interactiveMessage: {
          header: { title: "I miei social" },
          body: { text: "Puoi contattarmi anche qua: 👇" },
          footer: { text: nomebot },
          nativeFlowMessage: {
            buttons: [
              {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                  display_text: "『 💻 』 GitHub",
                  url: "https://github.com/chatunitycenter",
                  merchant_url: "https://github.com/chatunitycenter"
                })
              },
              {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                  display_text: "『 📸 』 Instagram",
                  url: "https://www.instagram.com/forza_napoli2025?igsh=MWh2ZGdjcnNpaTFqdA==",
                  merchant_url: "https://www.instagram.com/forza_napoli2025?igsh=MWh2ZGdjcnNpaTFqdA=="
                })
              }
            ]
          }
        }
      }
    }
  }, { userJid: m.sender })

  await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['creatore'] 
export default handler