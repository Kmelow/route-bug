const express = require('express');

// Load routes
const users = require('./routes/users');

// Launch App
const app = express();

// Routes
app.get('/', (req, res) => res.send('Hello World!'));
app.post('/', (req, res) => res.send('Got a POST request'));
app.put('/', (req, res) => res.send('Got a PUT request at /'));
app.delete('/', (req, res) => res.send('Got a DELETE request at /user'));

app.use('/api/v1/users', users);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
