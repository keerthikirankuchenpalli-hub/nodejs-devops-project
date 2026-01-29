const app = require('./app');

const config = require('./config/conig.js');

app.listen(config.PORT, () => {

    console.log(`server is running on port ${config.PORT}`);

});