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

// Rutt för att skapa en ny artist
app.post('/artists', async (req, res) => {
    try {
        const artist = await Artist.create({
            name: req.body.name,
            description: req.body.description
        });
        res.status(201).json(artist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rutt för att hämta alla artister
app.get('/artists', async (req, res) => {
    try {
        const artists = await Artist.findAll();
        res.json(artists);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rutt för att skapa ett nytt album
app.post('/albums', async (req, res) => {
    try {
        const album = await Album.create({
            title: req.body.title,
            year: req.body.year,
            ArtistId: req.body.ArtistId
        });
        res.status(201).json(album);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rutt för att hämta alla album
app.get('/albums', async (req, res) => {
    try {
        const albums = await Album.findAll();
        res.json(albums);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rutt för att skapa ett nytt track
app.post('/tracks', async (req, res) => {
    try {
        const track = await Track.create({
            title: req.body.title,
            order: req.body.order,
            AlbumId: req.body.AlbumId
        });
        res.status(201).json(track);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rutt för att hämta alla tracks
app.get('/tracks', async (req, res) => {
    try {
        const tracks = await Track.findAll();
        res.json(tracks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
