import qrcode from 'qrcode-terminal';

import { Client } from 'whatsapp-web.js';

const client = new Client({});

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('Client is ready!');
});

client.on('message', async (message) => {
  console.log(message.body)
  console.log(JSON.stringify(message))

  
  if(message.body === 'robo'){
    await message.reply('Eu sou um robo, estou sendo testado por ti. Muito Obrigado para sua confiança');
    
    await message.reply('*Mensagem em negrito?*\n*_Mensagem em itálico?_');
    
  }
  if (message.body === '!ping') {
    await message.reply('pong');
  }
});

client.initialize();