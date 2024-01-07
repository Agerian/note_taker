const path = require('path');
const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

console.log('Dynamic Read Path:', path.join(__dirname, '../db/db.json'));

function readNotes() {
  const notes = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8');
  return JSON.parse(notes);
}

function writeNotes(notes) {
  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes), 'utf8');
}

router.get('/api/notes', (req,res) => {
  const notes = readNotes();
  res.json(notes);
});

router.post('/api/notes', (req,res) => {
  const newNote = req.body;
  const notes = readNotes();

  newNote.id = uuidv4();

  notes.push(newNote);

  writeNotes(notes);
  
  res.json(newNote);
});

module.exports = router;