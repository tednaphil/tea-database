const express = require('express');
const app = express();
// const crypto = require('crypto');
const cors = require('cors');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use(cors());
app.use(express.json());

app.set('port', process.env.PORT || 3000);

app.locals.title = 'Tea database server!';


app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
  });

app.get('/api/v1/teas', async (request, response) => {
  try {
    const teas = await database('teas').select();
    response.status(200).json(teas);
  } catch(error) {
    response.status(500).json({ error });
  }
});

app.get('/api/v1/teas/:id', async (request, response) => {
  try {
    const id = request.params.id;
    const tea = await database('teas').where('id', id).select();
    if (tea) {
        response.status(200).json(tea[0])
    } else {
        response.sendStatus(404).json({error: `Could not find paper with id ${id}`})
    }
  } catch(error) {
    response.status(500).json({ error })
  }
})
