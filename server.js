const express = require('express');
const app = express();

app.use(express.json());

// Example endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Gotattoo Backend!' });
});

// Fallback route for 404 errors
app.all('*', (req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

module.exports = app;
