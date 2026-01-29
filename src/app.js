const express = require('express');

const apiRoutes = require('./routes/api.routes');

const logger = require('./middleware/logger.middleware');

const app = express();

app.use(express.json());
app.use(logger);
app.use('/api', apiRoutes);


module.exports = app;