const express = require('express');
const blogRoutes = require('./routes/blogRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(express.json());

app.use('/api/blog', blogRoutes);

app.use(errorHandler);

module.exports = app;
