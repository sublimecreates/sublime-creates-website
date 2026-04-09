const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static files (HTML, images, etc.) from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all: serve index.html for any unmatched route
app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Sublime Creates running at http://localhost:${PORT}`);
});
