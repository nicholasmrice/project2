const mongoose = require('mongoose');

const tapeSchema = new mongoose.Schema({
  artist: { type: String, required: true },
  title: { type: String, required: true },
  year: { type: String, required: true },
  coverImg: { type: String, required: true },
  cassetteImg: { type: String, required: true }
})

const Tape = mongoose.model('Tape', tapeSchema);

module.exports = Tape
