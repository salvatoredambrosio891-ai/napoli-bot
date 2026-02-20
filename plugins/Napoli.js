from pyrogram import Client, filters

@app.on_message(filters.command("partita") & filters.group)
def partita(client, message):
    testo = (
        "🔥💙 **FORZA NAPOLI!** 💙🔥\n\n"
        "⚽ **Prossima Partita** ⚽\n"
        "🏟 Stadio: Diego Armando Maradona\n"
        "🆚 Avversario: Atalanta\n"
        "📅 Data: 22 Febbraio 2026\n"
        "⏰ Ora: 15:00\n\n"
        "💪 Tutti pronti a tifare per il nostro Napoli!\n"
        "💙💛 **#ForzaNapoliSempre** 💛💙"
    )
    message.reply_text(testo, parse_mode="markdown")

app.run()