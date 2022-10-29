const mongoose = require('mongoose')

// Make A Schema
const promptSchema = new mongoose.Schema({
  promptText: { type: String, required: true },
  votes: { type: Number, default: '0' },
})

// Make A Model From The Schema

const Prompt = mongoose.model('Prompt', promptSchema)

// Export The Model For Use  In The App

module.exports = Prompt
