const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// endpoints

app.get('/ping', (req, res) => {
    res.send("Hello!")
})

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})