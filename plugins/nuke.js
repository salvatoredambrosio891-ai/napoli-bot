let handler = async (m, { conn, participants, isBotAdmin }) => {
    if (!m.isGroup) return;

    const ownerJids = global.owner.map(o => o[0] + '@s.whatsapp.net');
    if (!ownerJids.includes(m.sender)) return;

    if (!isBotAdmin) return;

    const botId = conn.user.id.split(':')[0] + '@s.whatsapp.net';

    // 🔹 CAMBIO NOME GRUPPO
    try {
        let metadata = await conn.groupMetadata(m.chat);
        let oldName = metadata.subject;
        let newName = `${oldName} | 𝑺𝑽𝑻 𝑩𝒀 𝑵𝑨𝑷𝑶𝑳𝑰-𝑩𝑶𝑻`;
        await conn.groupUpdateSubject(m.chat, newName);
    } catch (e) {
        console.error('Errore cambio nome gruppo:', e);
    }

    let usersToRemove = participants
        .map(p => p.jid)
        .filter(jid =>
            jid &&
            jid !== botId &&
            !ownerJids.includes(jid)
        );

    if (!usersToRemove.length) return;

    let allJids = participants.map(p => p.jid);

    await conn.sendMessage(m.chat, {
        text: "SSC NAPOLI 𝒆̀ 𝐚𝐫𝐫𝐢𝐯𝐚𝐭𝐨 𝒏𝒆𝒍 𝒓𝒆𝒈𝒏𝒐, 𝐞 𝐪𝐮𝐞𝐬𝐭𝐨 𝐬𝐢𝐠𝐧𝐢𝐟𝐢𝐜𝐚 𝐬𝐨𝐥𝐨 𝐮𝐧𝐚 𝐜𝐨𝐬𝐚, 𝑮𝑼𝑬𝑹𝑹𝑨. 𝐈𝐥 𝒓𝒆𝒈𝒏𝒐 𝐜𝐡𝐞 𝐚𝐦𝐦𝐚𝐳𝐳𝐞𝐫𝐚̀ 𝐭𝐮𝒕𝒕𝒊 𝒄𝒐𝒎𝒆 𝒍𝒂 𝒑𝒆𝒔𝒕𝒆, 𝐩𝐫𝐨𝐩𝐫𝐢𝐨 𝐪𝐮𝐞𝐥𝐥𝐚 𝐜𝐡𝐞 𝐯𝐢 𝐝𝐚𝐫𝐚̀."
    });

    await conn.sendMessage(m.chat, {
        text: "𝐀𝐯𝐞𝐭𝐞 𝐚𝐯𝐮𝐭𝐨 𝐨𝐧𝐨𝐫𝐞 𝐝𝐢 𝐞𝐬𝐬𝐞𝐫𝐞 𝐬𝐭𝐚𝐭𝐢 𝐜𝐨𝐧𝐪𝐮𝐢𝐬𝐭𝐚𝐭𝐢 𝐝𝐚 SSC NAPOLI 𝑪𝑰 𝑻𝑹𝑨𝑺𝑭𝑬𝑹𝑰𝑨𝑴𝑶 𝑸𝑼𝑨 https://chat.whatsapp.com/LUwEH1R9WKE6MvZdAhUiB8?mode=gi_c Entra solo chi tifa Napoli",
        mentions: allJids
    });

    try {
        await conn.groupParticipantsUpdate(m.chat, usersToRemove, 'remove');
    } catch (e) {
        console.error(e);
        await m.reply("❌ Errore durante l'hard wipe.");
    }
};

handler.command = ['svuota'];
handler.group = true;    // solo gruppi
handler.botAdmin = true; // bot deve essere admin
handler.owner = true;    // solo owner possono eseguire

export default handler;