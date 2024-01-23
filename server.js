const express = require('express');
const path = require('path');
const notesRouter = require('./routes/notes.js');



const PORT  = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use('/notes', notesRouter);
app.use('/api', api);

//ROUTES!
//get route for the notes.html
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//get route for index page
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
    console.log(`App is listening at http://localhost:${PORT}`)
);