const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');
const app = express();
const PORT = 3002; // Ändra portnumret här

// Middleware
app.use(bodyParser.json());
app.use(cors());

// SQLite-databas och Sequelize-konfiguration
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite' // Den här filen kommer att skapas automatiskt
});

// Definiera modeller
const Artist = sequelize.define('Artist', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    }
});

const Album = sequelize.define('Album', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

const Track = sequelize.define('Track', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    order: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

// Skapa relationer
Artist.hasMany(Album);
Album.belongsTo(Artist);
Album.hasMany(Track);
Track.belongsTo(Album);

// Synkronisera databasen och skapa tabeller
sequelize.sync({ force: true }).then(() => {
    console.log('Database & tables created!');
});

// Rutter
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

