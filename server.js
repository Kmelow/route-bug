const express = require('express');

const auth = require('./routes/auth');

const app = express();

app.use(express.json());

app.use('/api/v1/auth', auth);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
