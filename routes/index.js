const express = require('express');
const router = express.Router();

let notes = [];

//get route to get all of the notes
router.get('/notes', (req,res) => {
    res.json(notes);
});

//post route to add a new note
router.post('/notes', (req, res) => {
    if(title && text) {
        const newNote = {title, text};
        notes.push(newNote);
        res.json(newNote);
    } else {
        res.status(400).json({error: 'Title and text are required'});
    }
});


