const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

require('dotenv').config();

// const sqlConnection = mysql.createConnection({
//     host: "",
//     port: process.env.PORT,
//     user: "",
//     password: process.env.MYSQLSECRET,
//     database: ""
// })

// connection.connect(function(err) {
//     if (err) {
//       console.error('error connecting: ' + err.stack);
//       return;
//     }
   
//     console.log('connected as id ' + connection.threadId);
//   });

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