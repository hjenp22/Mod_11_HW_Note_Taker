const notes = require('express').Router();
const fs = require('fs');
const uuid = require('uuid');

// get route to get all the notes
notes.get('/', (req, res) => {
  let notesData = fs.readFileSync('./db/db.json', 'utf8');
  notesData = JSON.parse(notesData);
  res.json(notesData);
});

// post route to add a new note
notes.post('/', (req, res) => {
  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuid.v4(),
    };
    let notesData = fs.readFileSync('./db/db.json', 'utf8');
    notesData = JSON.parse(notesData);
    notesData.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(notesData), 'utf8');
    res.json('note was added');
  } else {
    res.error('error when adding note');
  }
});

// delete route to delete a note by id
notes.delete('/:id', (req, res) => {
  let notesData = fs.readFileSync('./db/db.json', 'utf8');
  notesData = JSON.parse(notesData);

  const filteredNotes = notesData.filter((note) => req.params.id !== note.id);
  fs.writeFileSync('./db/db.json', JSON.stringify(filteredNotes), 'utf8');
  res.json('note was deleted');
});

module.exports = notes;
