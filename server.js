const mongoose = require("mongoose");
const app = require('./app');

const DB_HOST =
  "mongodb+srv://Martina:QZsC7odZNnlYOYDA@cluster0.fcknohc.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose.set('strictQuery', true);

mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(3000)
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });


// const app = require('./app')

// app.listen(3000, () => {
//   console.log('Server running. Use our API on port: 3000');
// });























// const fs = require("fs/promises");
// const express = require('express');
// const morgan = require('morgan');
// const cors = require('cors');

// const app = express();


// function checkApiKey(req, res, next) {
//   console.log(req.method, req.url);
//   const { apiKey } = req.query;
//   if (apiKey === '12345') {
//     return next();
//   }
//   return res.status(401).json({ error: 'Unauthorized' });
// };

// app.use(checkApiKey);

// app.use(morgan('combined'));
// app.use(cors());


// app.get('/', async(req, res) => {
//    try {
//     const data = await fs.readFile("contacts.json", "utf-8");
//     res.json(JSON.parse(data));
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// Body parser middleware
// app.use(express.json());

// app.post('/contacts', (req, res) => {
//   const newContact = req.body;
//   console.log({newContact});

//   res.end();
// });


// app.get('/movies', (req, res) => {
//   res.json([{name: "Allen Raymond"}]);
// });
  
// app.all('/contacts', (req, res) => {
//   console.log(req.method, req.url);
//   res.send('Contacts');
// });

// app.use(express.static('contacts.json'));




// app.listen(3000, () => {
//   console.log('Server running. Use our API on port: 3000');
// })








// const http = require('http');

// const server = http.createServer((req, res) => {
//   const { url } = req;
//   console.log({ url });


//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello world');
// });

// server.listen(3000, () => {
//   console.log('Server running at http://127.0.0.1:3000');
// })



