const express = require('express');
const app = express();
const port = 3001;

app.listen(port, () => {
    console.log(`App running at port ${port}`)
});

app.get('/starfish', (req, res) => {
    res.send("Hello world!  v1.0")
});