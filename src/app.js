const express = require('express');

const config = require('./routes/api.routes');

const loger = require('./middleware/logger.middleware');

const app = express();

app.use(express.json());
app.use(logger);
app.use('/api', apiRoutes);

module.exports = app;