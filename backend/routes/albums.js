const express = require('express');
const router = express.Router();
const { Album } = require('../index'); // Justera sökvägen efter behov

// Hämta alla album
router.get('/', async (req, res) => {
    try {
        const albums = await Album.findAll();
        res.json(albums);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Hämta ett specifikt album
router.get('/:id', async (req, res) => {
    try {
        const album = await Album.findByPk(req.params.id);
        if (album) {
            res.json(album);
        } else {
            res.status(404).json({ error: 'Album not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Lägg till ett nytt album
router.post('/', async (req, res) => {
    try {
        const newAlbum = await Album.create(req.body);
        res.status(201).json(newAlbum);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Uppdatera ett album
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Album.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedAlbum = await Album.findByPk(req.params.id);
            res.status(200).json(updatedAlbum);
        } else {
            res.status(404).json({ error: 'Album not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Ta bort ett album
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Album.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ error: 'Album not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
