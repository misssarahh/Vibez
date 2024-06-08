const express = require('express');
const router = express.Router();
const { Track } = require('../index'); // Justera s�kv�gen efter behov

// H�mta alla sp�r
router.get('/', async (req, res) => {
    try {
        const tracks = await Track.findAll();
        res.json(tracks);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// H�mta ett specifikt sp�r
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

// L�gg till ett nytt sp�r
router.post('/', async (req, res) => {
    try {
        const newTrack = await Track.create(req.body);
        res.status(201).json(newTrack);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Uppdatera ett sp�r
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

// Ta bort ett sp�r
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
