const express = require('express');
const path = require('path');
const apiRouter = require('./routes'); 

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRouter);

// ROUTES!
// get route for the notes.html
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// get route for the index page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public', '/index.html'))
);


app.listen(PORT, () =>
  console.log(`App is listening at http://localhost:${PORT}`)
);
