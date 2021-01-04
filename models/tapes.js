const mongoose = require('mongoose');

const tapeSchema = new mongoose.Schema({
  name: {type: String, required: true },
  year: {type: String, required: true },
  coverImg: {type: String, required: true},
  cassetteImg: {type: String, required: true}
})

const Tapes = mongoose.model('Tape', tapeSchema);

module.exports = Tape;
