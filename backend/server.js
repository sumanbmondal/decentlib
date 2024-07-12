const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Marker = require('./models/Marker');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://darkmatter:cc129txIH@cluster0.ta1ztdq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post('/api/markers', async (req, res) => {
    console.log(req.body);
  const { key, location } = req.body;

  const newMarker = new Marker({
    key,
    location
  });

  try {
    const savedMarker = await newMarker.save();
    res.status(201).json(savedMarker);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
