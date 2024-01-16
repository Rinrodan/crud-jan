const express = require('express');
const knex = require('./db/index.js');
const app = express();
const cors = require('cors')
const path = require('path');

const port = 4000;

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './express/index.html'))
});

app.listen({port}, () => console.log(`Recipe app is listening on port ${port}.`));

app.get('/users', async (req, res) => {
	try {
	  const users = await knex('users')
		.select("*")
	  res.status(201).json(users)
	} catch (err) {
	  res.status(500).json({ message: 'Failed to retrieve users data.' })
	}
  })