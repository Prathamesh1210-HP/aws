const express = require('express');
const path = require('path');

const app = express();

// Serve static files
app.use(express.static(__dirname));

// Home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'completion.html'));
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);
});

const server = app.listen(80, '0.0.0.0', () => {
    console.log('Server is running on port 80');
});

// Check if server closes unexpectedly
server.on('close', () => {
    console.log('⚠️ Server closed unexpectedly');
});

server.on('error', (err) => {
    console.error('Server error:', err);
});