// index.js
// Express application setup for AWS App Runner deployment.
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve all static files from the public directory.
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to provide AWS deployment environment metadata.
app.get('/api/env', (req, res) => {
  const awsRegion = process.env.AWS_REGION || 'Local Development Environment';
  res.json({ environment: awsRegion });
});

// Fallback route for client-side navigation and single-page application behavior.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server on the configured port.
app.listen(PORT, () => {
  console.log(`Server listening on port https://localhost:${PORT}`);
});
