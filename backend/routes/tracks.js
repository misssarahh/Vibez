const express = require('express');
const router = express.Router();
const { Track } = require('../index'); // Justera sökvägen efter behov

// Hämta alla spår
router.get('/', async (req, res) => {
    try {
        const tracks = await Track.findAll();
        res.json(tracks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Hämta ett specifikt spår
router.get('/:id', async (req, res) => {
    try {
        const track = await Track.findByPk(req.params.id);
        if (track) {
            res.json(track);
        } else {
            res.status(404).json({ error: 'Track not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Lägg till ett nytt spår
router.post('/', async (req, res) => {
    try {
        const newTrack = await Track.create(req.body);
        res.status(201).json(newTrack);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Uppdatera ett spår
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Track.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedTrack = await Track.findByPk(req.params.id);
            res.status(200).json(updatedTrack);
        } else {
            res.status(404).json({ error: 'Track not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Ta bort ett spår
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Track.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Track not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
