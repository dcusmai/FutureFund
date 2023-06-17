const port = 3001;
const app = require('./src/routes/app');

app.listen(port, () => {
    console.log(`listen on port ${port}`);
});