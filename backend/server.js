const express = require('express');
const notes = require('./data/notes');
const dotenv = require('dotenv');

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("API is running...")
});

app.get('/api/notes', (req, res) => {
    res.send(notes);
});

app.get('/api/notes/:id', (req, res) => {
    const note = notes.find((n) => (Number(n._id) === Number(req.params.id)));
    res.send(note);
});

app.listen(PORT, console.log(`server started on PORT:${PORT}`));

