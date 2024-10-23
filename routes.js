const express = require('express');
const route = express.Router();

route.post('/new-acc', async (req, res) => {
    const { username, email } = req.body;

    const webhookURL = 'https://discord.com/api/webhooks/1298271148492197970/sB-8jzEgM1nM2vt_y4PUI7SGqEw9uoEF0nSKwwxffyPd5ElfNygyBKcH2Lhu7jdA_1i4';

    const message = {
        content: `🚨 Uma nova conta foi criada!\nUsuário: ${username}\nEmail: ${email}`,
    };
    try {
         // Enviar a mensagem para o webhook do Discord
         await fetch(webhookURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(message),
         })
         
         res.status(200).json({ message: 'Notificação enviada ao Discord via Webhook!' });
        
    } catch (error) {
        console.error('Erro ao enviar mensagem ao Discord:', error);
        res.status(500).json({ error: 'Erro ao enviar mensagem ao Discord' });
    }

})

module.exports = route;