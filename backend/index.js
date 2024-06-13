const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');
const app = express();
const PORT = 3002; // Ändra portnumret här

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MySQL-databas och Sequelize-konfiguration
const sequelize = new Sequelize('vibez', 'root', 'Sarahhashem98', {
    host: 'localhost',
    dialect: 'mysql'
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
sequelize.sync().then(() => {
    console.log('Database & tables created!');
});

// Rutter
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// POST endpoint för att skapa ett album
app.post('/albums', async (req, res) => {
    try {
        const album = await Album.create(req.body);
        res.json(album);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
