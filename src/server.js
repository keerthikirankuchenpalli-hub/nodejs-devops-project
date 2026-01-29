const app = require('./app');

const PORT = process.env.PORT || 7272;

app.listen(PORT, () => {

    console.log(`server is running on port ${PORT}`);
});