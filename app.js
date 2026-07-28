const express = require('express');
const path = require('path');
const app = express();
const PORT = 80; // Running on HTTP port 80

// Serve the "completion.html" page at the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'completion.html' ));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
