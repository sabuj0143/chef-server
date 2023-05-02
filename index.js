const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.port || 5000;

const chefs = require('./data/chefs.json');
app.use(cors());

app.get('/chefs', (req, res) => {
    res.send(chefs);
});

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const singleChef = chefs.find(n => n.id == id)
    res.send(singleChef)
});

app.get('/', (req, res) => {
    res.send('Food-Network Here..')
});

app.listen(port, () => {
    console.log(`Food-Network API is Running on port : ${port}`);
})