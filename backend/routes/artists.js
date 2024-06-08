const express = require('express');
const router = express.Router();
const { Artist } = require('../index'); // Justera sökvägen efter behov

// Hämta alla artister
router.get('/', async (req, res) => {
    try {
        const artists = await Artist.findAll();
        res.json(artists);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Hämta en specifik artist
router.get('/:id', async (req, res) => {
    try {
        const artist = await Artist.findByPk(req.params.id);
        if (artist) {
            res.json(artist);
        } else {
            res.status(404).json({ error: 'Artist not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Lägg till en ny artist
router.post('/', async (req, res) => {
    try {
        const newArtist = await Artist.create(req.body);
        res.status(201).json(newArtist);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Uppdatera en artist
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Artist.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedArtist = await Artist.findByPk(req.params.id);
            res.status(200).json(updatedArtist);
        } else {
            res.status(404).json({ error: 'Artist not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Ta bort en artist
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Artist.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Artist not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
