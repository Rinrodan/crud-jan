const express = require('express');
const knex = require('./db/index.js');
const app = express();
const cors = require('cors')
const path = require('path');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const GetUserData = require('./db/serverFunctions.js');


const port = 4000;

app.use(express.json())
app.use(cors())
app.use(bodyParser.json());


app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './express/index.html'))
});

app.listen({port}, () => console.log(`Recipe app is listening on port ${port}.`));
//\\\\\\\\\\\\\\\\\  USERS ////////////////////////////////////////////////////////

//------- ALL USERS ----------
app.get('/users', async (req, res) => {
	try {
	  const users = await knex('users')
		.select("*")
	  res.status(201).json(users)
	} catch (err) {
	  res.status(500).json({ message: 'Failed to retrieve users data.' })
	}
  })

//------- ADD USER ----------
app.post('/users', async (req, res) => {
	const { fname, lname, email, imageurl, username, password } = req.body;
	console.log(req.body)
	const newUser = {
	  fname: fname,
	  lname: lname,
	  email: email,
	  username: username,
	  imageurl: imageurl,
	  password: bcrypt.hashSync(password, 10)
	}
  
	try {
	  //  console.log('do we even get this far?')
	  const addedUserResponse = await knex('users')
		.insert(newUser)
		.returning('*')
  
	  console.log('user response: ', addedUserResponse)
  
	  delete addedUserResponse.password
	  // addedUserResponse = addedUserResponse.map((e) => {
	  //   delete e.password
	  // })
	  res.status(201).json(addedUserResponse[0])
	} catch (err) {
	  res.status(500).json(err.message)
	}
  
  })

  //\\\\\\\\\\\\\\\\\  MEASURES ////////////////////////////////////////////////////////
  app.get('/measures', async (req, res) => {
	try {
	  const measures = await knex('measures')
		.select("*")
	  res.status(201).json(measures)
	} catch (err) {
	  res.status(500).json({ message: 'Failed to retrieve measures data.' })
	}
  })
  //\\\\\\\\\\\\\\\\\  FRACTIONS ////////////////////////////////////////////////////////
  app.get('/fractions', async (req, res) => {
	try {
	  const fractions = await knex('fractions')
		.select("*")
	  res.status(201).json(fractions)
	} catch (err) {
	  res.status(500).json({ message: 'Failed to retrieve fractions data.' })
	}
  })
  //\\\\\\\\\\\\\\\\\  INGREDIENTS ////////////////////////////////////////////////////////
  
 //------- ALL INGREDIENTS ----------
  app.get('/ingredients', async (req, res) => {
	try {
	  const ingredients = await knex('ingredients')
		.select("*")
	  res.status(201).json(ingredients)
	} catch (err) {
	  res.status(500).json({ message: 'Failed to retrieve ingredients data.' })
	}
})
//------- ADD INGREDIENT ----------
app.post('/ingredients', async (req, res) => {
	const { name, measure_id, image } = req.body;
	console.log(req.body)
	let newIngredient = {
		name:name,
		measure_id:measure_id,
		image:image
	  }
	try {
	  const addedIngredientResponse = await knex('ingredients')
		.insert(newIngredient)
		.returning('*')
  
	  console.log('New Ingredient Response: ', addedIngredientResponse)
  
	  res.status(201).json(addedIngredientResponse[0])
	} catch (err) {
	  res.status(500).json(err.message)
	}
  
  })


//\\\\\\\\\\\\\\\\\\  Login  ////////////////////////////////////////////////////////////

app.post('/login', async (request, response) => {
	const { username, password } = request.body;
	knex('users')
	  .where({ username })
	  .first()
	  .then(user => {
		if (!user) {
		  response.status(401).json({
			error: 'No user by that name'
		  });
		} else {
		  bcrypt.compare(password, user.password)
			.then( async isAuthenticated => {
			  if (!isAuthenticated) {
				response.status(401).json({
				  error: 'Unauthorized Access!'
				});
			  }
			  if (isAuthenticated) {
				try {
				  const data = await GetUserData(username);
				// const data = {"username": "jsmith"}				
				  response.status(201).json(data)
				} catch (err) {
				  response.status(500).json({ message: 'Failed to retrieve users data.' })
				}
			  }  else {
				response.status(500).json({ message: 'Failed' })
			  }
			});
		}
	  });
  });

  //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\  single user  //////////////////////////

  app.get('/users/:username', (request, response) => {
	const { username } = request.params;
  
	knex('users')
	  .where({ username })
	  .first()
	  .then(user => {
		try {
		  if (!user) {
			response.status(404).json({
			  error: 'No user by that name'
			});
		  } else {
			delete user.password; // Use user instead of userData
			response.status(200).json(user); // Use user instead of userData
		  }
		} catch (error) {
		  // Handle any errors that may occur in the callback
		  response.status(500).json({ error: 'Failed to process user data' });
		}
	  })
	  .catch(error => {
		// Handle any errors that may occur in the query
		response.status(500).json({ error: 'Failed to retrieve user data' });
	  });
  });
