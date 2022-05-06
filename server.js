const express = require('express');
const { faker } = require('@faker-js/faker');

const app = express();
// interpretar y decodificar json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

class User {
	constructor() {
		this._id = faker.datatype.uuid();
		this.firstName = faker.name.firstName();
		this.lastName = faker.name.lastName();
		this.email = faker.internet.email();
		this.phone = faker.phone.phoneNumber();
		this.password = faker.internet.password();
	}
}

class Company {
	refDirection() {
		return {
			street: faker.address.streetAddress(),
			city: faker.address.city(),
			state: faker.address.state(),
			country: faker.address.country(),
			zipCode: faker.address.zipCode(),
		};
	}

	constructor() {
		this._id = faker.datatype.uuid();
		this.name = faker.company.companyName();
		this.direction = this.refDirection();
	}
}

app.get('/api/users/new', (req, res) => {
	const newUser = new User();
	res.json(newUser);
});

app.get('/api/companies/new', (req, res) => {
	const newCompany = new Company();
	res.json(newCompany);
});

app.get('/api/company', (req, res) => {
	const newUser = new User();
	const newCompany = new Company();
	res.json([newUser, newCompany]);
});

app.listen(8000, () => console.log('🥬Frescooooo'));
