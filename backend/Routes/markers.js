const express = require('express');
const router = express.Router();
const Marker = require('./models/Marker');

// Fetch markers by key
router.get('/:key', async (req, res) => {
  try {
    const markers = await Marker.find({ key: req.params.key });
    res.json(markers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new marker
router.post('/', async (req, res) => {
  const marker = new Marker({
    lat: req.body.lat,
    lng: req.body.lng,
    key: req.body.key
  });

  try {
    const newMarker = await marker.save();
    res.status(201).json(newMarker);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

