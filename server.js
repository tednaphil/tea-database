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

// app.get('/api/v1/teas', (request, response) => {
//   const teas = app.locals.teas;

//   response.json({ teas });
// });

// app.get('/api/v1/teas/:id', (request, response) => {
//   // console.log(request.params)
//   const id = request.params.id;
//   const tea = app.locals.teas.find(obj => obj._id === id);
//   if (tea) {
//       response.status(200).json({tea})
//   } else {
//       response.sendStatus(404)
//   }
// })
