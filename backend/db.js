const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username', // Byt ut mot ditt MySQL-användarnamn
    password: 'your_password', // Byt ut mot ditt MySQL-lösenord
    database: 'your_database' // Byt ut mot namnet på din databas
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

module.exports = connection;
