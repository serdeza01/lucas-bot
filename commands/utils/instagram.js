const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'instagram',
  category: 'utils',
  permissions: ['SEND_MESSAGES'],
  ownerOnly: false,
  usage: 'instagram',
  examples: ['instagram'],
  description: 'Le lien du compte intagram de Lucas !',
  async runInteraction(client, interaction) {
    const embed = new MessageEmbed()
      .setTitle('Compte instagram de Lucas !')
      .setThumbnail(client.user.displayAvatarURL())
      .setURL('https://instagram.com/lucas_ang_67?igshid=YmMyMTA2M2Y=')
      .setDescription('Clic sur le lien en bleu pour accéder au compte instagram de Lucas !')
      .setTimestamp()
      .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL() });

    interaction.reply({ embeds: [embed] });
  },
}