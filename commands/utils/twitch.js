const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'twitch',
  category: 'utils',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'twitch',
  examples: ['twitch'],
  description: 'Le lien de la chaîne twitch de Lucas !',
  async runInteraction(client, interaction) {
    const embed = new MessageEmbed()
      .setTitle('Chaîne twitch de Lucas !')
      .setThumbnail(client.user.displayAvatarURL())
      .setURL('https://www.twitch.tv/lucas_ang67')
      .setDescription('Clic sur le lien en bleu pour accéder à la chaîne twitch de Lucas !')
      .setTimestamp()
      .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL() });

    interaction.reply({ embeds: [embed] });
  },
}