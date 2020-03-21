const express = require('express');

// Load routes
const users = require('./routes/users');

// Launch App
const app = express();

// Routes
app.use('/api/v1/users', users);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
