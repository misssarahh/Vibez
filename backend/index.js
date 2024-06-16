// backend/index.js
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3002;

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Sarahhashem98',
    database: 'vibez'
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

app.get('/artists', (req, res) => {
    connection.query('SELECT * FROM artists', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json(results);
    });
});

app.post('/artists', (req, res) => {
    const { name, image } = req.body;
    connection.query('INSERT INTO artists (name, image) VALUES (?, ?)', [name, image], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json({ id: results.insertId, name, image });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
