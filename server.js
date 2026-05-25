const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public
app.use(express.static(path.join(__dirname, 'public')));

// /workout and /workout/ both serve the workout app
app.get(['/workout', '/workout/'], (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'workout', 'index.html'));
});

// Catch-all: serve main site
app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Sublime Creates running at http://localhost:${PORT}`);
});
