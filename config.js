/**
 * Global Configuration for VOID-X-MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['+2349157872959'],
    ownerName: ['Bishop BOT'],
    
    // Bot Configuration
    botName: 'VOID-X-MD',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || '',
    // Set this to your WhatsApp number (with country code, no +, no spaces)
    // to get a PAIRING CODE instead of scanning a QR code.
    // Example: '263712345678'
    // Leave empty ('') to use QR code scanning instead.
    pairingNumber: process.env.PAIRING_NUMBER || '2349157872959',
    newsletterJid: '263716808196@newsletter',
    newsletterLink: 'https://whatsapp.com/channel/0029VbBxPYN2kNFj3I1H1e0f',
    updateZipUrl: 'https://github.com/boycoe7k/VOID-X-MD-/archive/refs/heads/main.zip',
    
    // Sticker Configuration
    packname: 'VOID-X-MD',
    
    // Bot Behavior
    selfMode: false,
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: true,
    autoReactMode: 'bot',
    autoDownload: false,
    autoStatusView: true,   // Auto view statuses
    autoStatusLike: true,   // Auto like statuses
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: true,
      antilinkAction: 'delete',
      antitag: false,
      antitagAction: 'delete',
      antiall: false,
      antiviewonce: false,
      antibot: false,
      anticall: false,
      antigroupmention: false,
      antigroupmentionAction: 'delete',
      welcome: false,
      welcomeMessage: '╭━〔 ☬ 𝗩𝗢𝗜𝗗-𝗫-𝗠𝗗 ☬ 〕━⬣\n┃\n┃ 👋 Welcome @user!\n┃ 📌 Group: @group\n┃ 👥 Members: #memberCount\n┃ 🕒 Time: time\n┃\n╰━━━━━━━━━━━━⬣\n\ngroupDesc\n\n> ☬ 𝗩𝗢𝗜𝗗-𝗫-𝗠𝗗 ☬',
      goodbye: false,
      goodbyeMessage: '╭━〔 ☬ 𝗩𝗢𝗜𝗗-𝗫-𝗠𝗗 ☬ 〕━⬣\n┃ 👋 Goodbye @user!\n╰━━━━━━━━━━━━⬣',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false
    },
    
    // Quackr API for temp numbers
    quackrApiKey: 'EMXfcFdclIa9VVXjF5FYu1QSnh13',
    quackrBaseUrl: 'https://api.quackr.io',
    
    // API Keys
    apiKeys: {
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    timezone: 'Africa/Harare',
    maxWarnings: 3,
    
    social: {
      channel: 'https://whatsapp.com/channel/0029VbBxPYN2kNFj3I1H1e0f',
      owner: '263716808196'
    }
};
