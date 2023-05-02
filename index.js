const express = require('express');
const app = express();
const port = process.env.port || 5000;

app.get('/', (req, res) => {
    res.send('Food-Network Here..')
});

app.listen(port, () => {
    console.log(`Food-Network API is Running on port : ${port}`);
})