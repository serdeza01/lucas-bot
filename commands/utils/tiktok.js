const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'tiktok',
  category: 'utils',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'tiktok',
  examples: ['tiktok'],
  description: 'Le lien de la chaîne tiktok de Lucas !',
  async runInteraction(client, interaction) {
    const embed = new MessageEmbed()
      .setTitle('Chaîne tiktok de Lucas !')
      .setThumbnail(client.user.displayAvatarURL())
      .setURL('https://www.tiktok.com/@lucasang2?_t=8XDZ9isdbT4&_r=1')
      .setDescription('Clic sur le lien en bleu pour accéder à la chaîne tiktok de Lucas !')
      .setTimestamp()
      .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL() });

    interaction.reply({ embeds: [embed] });
  },
}