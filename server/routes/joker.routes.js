const JokerController = require('../controllers/joker.controller');

module.exports = (app) => {
	app.get('/api/jokes/', JokerController.findAllJokes);
	app.get('/api/jokes/:id', JokerController.findJoke);
	app.post('/api/jokes/new', JokerController.createJoke);
	app.put('/api/jokes/update/:id', JokerController.updateJoke);
	app.delete('/api/jokes/delete/:id', JokerController.deleteJoke);
};
