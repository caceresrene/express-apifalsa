const mongoose = require('mongoose');

mongoose
	.connect('mongodb://localhost/mongo101', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('🥬DB Connected'))
	.catch((error) => console.log('There was an error' + error));
