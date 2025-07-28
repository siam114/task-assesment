const express = require('express');
const authRoutes = require('./routes/auth.route');
const userRoutes = require('./routes/user.route');
const helmet = require('helmet');
require('dotenv').config();
const cors = require('cors');
const errorHandler = require('./middlewares/error.middleware');
const app = express();
app.use(express.json());
app.use(errorHandler);

app.use(helmet());
app.use(cors({ origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE'] }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// 404 fallback
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

module.exports = app;