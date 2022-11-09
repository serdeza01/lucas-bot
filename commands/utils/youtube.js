const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'youtube',
  category: 'utils',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'youtube',
  examples: ['youtube'],
  description: 'Le lien de la chaîne youtube de Lucas !',
  async runInteraction(client, interaction) {
    const embed = new MessageEmbed()
      .setTitle('Chaîne youtube de Lucas !')
      .setThumbnail(client.user.displayAvatarURL())
      .setURL('https://www.youtube.com/channel/UCcNMiknHVDEI4BcuadJ1M_w')
      .setDescription('Clic sur le lien en bleu pour accéder à la chaîne youtube de Lucas !')
      .setTimestamp()
      .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL() });

    interaction.reply({ embeds: [embed] });
  },
}