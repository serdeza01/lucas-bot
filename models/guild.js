const moongose = require ('mongoose');

const guildSchema = moongose.Schema({
  id : String,
  prefix: { 'type': String, 'default': '!' },
  logChannel: { 'type': String, 'default': '1004683357940109402' }
});

module.exports = moongose.model('guild', guildSchema);