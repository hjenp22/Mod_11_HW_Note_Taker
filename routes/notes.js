const express = require('express');
const router = express.Router();

let notes = [];

//get route to get all the notes
router.get('/', (req, res) => {
    res.json(notes);
});

//post route to add a new note
router.post('/', (req, res) =>{
    const {title, text} = req.body;

    if (title && text) {
        const newNote = { title, text};
        notes.push(newNote);
        res.json(newNote);
    } else {
        res.status(400).json({error:'Title and texts are required!'});
    }
});

