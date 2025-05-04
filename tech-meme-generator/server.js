const express = require('express');
const app = express();
const PORT = 3000;

const memes = [
  'When you fix a bug and 10 more appear.',
  'Git commit messages be like: "final final version".',
  'Why does it work? I have no idea.',
  'Code never lies, comments sometimes do.',
  'It works on my machine!',
];

app.get('/', (req, res) => {
  res.send('Welcome to the Tech Meme Generator API!');
});

app.get('/meme', (req, res) => {
  try {
    const randomMeme = memes[Math.floor(Math.random() * memes.length)];
    res.json({ meme: randomMeme });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching a meme.' });
  }
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

module.exports = app;
