/**
 * Bot Settings Commands - VOID-X-MD
 */
const config = require('../../config');

const settingsList = {
  autoread: 'autoRead',
  autoreact: 'autoReact',
  autostatusview: 'autoStatusView',
  autostatuslike: 'autoStatusLike',
  selfmode: 'selfMode',
  autotyping: 'autoTyping',
  autobio: 'autoBio',
};

module.exports = {
  name: 'settings',
  aliases: Object.keys(settingsList),
  category: 'settings',
  description: 'Toggle bot settings',
  usage: '.settings / .autoread on|off',
  ownerOnly: true,

  async execute(sock, msg, args, extra) {
    const cmd = extra.command?.toLowerCase() || 'settings';

    // Show all settings
    if (cmd === 'settings') {
      const lines = Object.keys(settingsList).map(k => {
        const val = config[settingsList[k]];
        return `┃➤ .${k} — ${val ? '✅ ON' : '❌ OFF'}`;
      }).join('\n');

      return extra.reply(`╭━〔 ☬ 𝗩𝗢𝗜𝗗-𝗫-𝗠𝗗 ☬ 〕━⬣\n┃\n┃  ⚙️ BOT SETTINGS\n┃\n${lines}\n┃\n╰━━━━━━━━━━━━⬣\n> ☬ 𝗩𝗢𝗜𝗗-𝗫-𝗠𝗗 ☬`);
    }

    // Toggle a setting
    const key = settingsList[cmd];
    if (!key) return extra.reply('❌ Unknown setting.');

    const toggle = args[0]?.toLowerCase();
    if (!toggle || !['on', 'off'].includes(toggle)) {
      return extra.reply(`❌ Usage: *.${cmd} on* or *.${cmd} off*\nCurrent: ${config[key] ? '✅ ON' : '❌ OFF'}`);
    }

    config[key] = toggle === 'on';
    await extra.reply(`✅ *${cmd}* is now *${toggle.toUpperCase()}*`);
  }
};
