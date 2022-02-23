const express = require('express');

const app = express();

app.get('/', (rer, res) => {
    res.send('Hi noobie! Welcome!');
});

app.listen(8080, () => {
    console.log("Listening on port 8080");
});