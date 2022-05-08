const mongoose = require('mongoose');

const JokerSchema = new mongoose.Schema({
	setup: {
		type: String,
		required: [true, 'you should provide a setup'],
		minlength: [10, 'the setup must be at least 10 characters long'],
	},
	punchline: {
		type: String,
		required: [true, 'you should provide a punchline'],
		minlength: [3, 'the punchline must be at least 3 characters long'],
	},
});

const Joker = mongoose.model('jokes', JokerSchema);

module.exports = Joker;
