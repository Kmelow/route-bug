const dotenv = require('dotenv');
const express = require('express');
const connectDB = require('./db/connect');

// Set configurations for dotenv
dotenv.config({ path: './config.env' });

// Load routes
const auth = require('./routes/auth');
const users = require('./routes/users');
const purchases = require('./routes/purchases');
const configs = require('./routes/configs');

// Launch App
const app = express();

// Connect to DB
connectDB();

// Middlewares
app.use(express.json());

// Routes
app.use('/api/v1/auth', auth);
app.use('/api/v1/users', users);
app.use('/api/v1/purchases', purchases);
app.use('/api/v1/configs', configs);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
