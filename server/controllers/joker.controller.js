const Joker = require('../models/joker.model');

// Find all
module.exports.findAllJokes = (req, res) => {
	Joker.find()
		.then((allJokes) => res.json({ jokes: allJokes }))
		.catch((error) => res.json({ message: 'there was an error' + error }));
};
// Find one
module.exports.findJoke = (req, res) => {
	Joker.findOne({ _id: req.params.id }).then((joke) =>
		res
			.json({ joke: joke })
			.catch((error) => res.json({ message: 'there was an error' + error }))
	);
};
// Create
module.exports.createJoke = (req, res) => {
	Joker.create(req.body)
		.then((newJoke) => res.json({ joke: newJoke }))
		.catch((error) => res.json({ message: 'there was an error' + error }));
};
// Update
module.exports.updateJoke = (req, res) => {
	Joker.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
		runValidations: true,
	})
		.then((joke) => res.json({ joke: joke }))
		.catch((error) => res.json({ message: 'there was an error' + error }));
};
// Delete
module.exports.deleteJoke = (req, res) => {
	Joker.deleteOne({ _id: req.params.id })
		.then((result) => res.json({ result: result }))
		.catch((error) => res.json({ message: 'there was an error' + error }));
};
// get random
module.exports.getRandomJoke = (req, res) => {
	Joker.aggregate([{ $sample: { size: 1 } }])
		.then((joke) => res.json({ joke: joke }))
		.catch((error) => res.json({ message: 'there was an error' + error }));
};
