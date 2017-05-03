const mongoose = require('mongoose');

const GuessSchema = mongoose.Schema({
    fewestGuesses: {
        type: Number
    }
})

const FewestGuesses = mongoose.model('FewestGuesses', GuessSchema);

module.exports = {FewestGuesses};