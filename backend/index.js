const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const users = require('./Routes/users');
// const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
// app.use(bodyParser.json());

// Routes
app.use('/api/users', users);

// Connect to MongoDB
mongoose.connect('mongodb+srv://darkmatter:cc129txIH@cluster0.ta1ztdq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define Marker schema and model
const markerSchema = new mongoose.Schema({
  title: String,
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    }
  },
  key: String,
  user: {
    name: String,
    contact: String,
  }
});

const Marker = mongoose.model('Marker', markerSchema);

// Route to add a marker
app.post('/api/markers', async (req, res) => {
  try {
    const { title, location, key, user } = req.body;
    const newMarker = new Marker({ title, location, key, user });
    await newMarker.save();
    res.status(201).json(newMarker);
  } catch (error) {
    res.status(400).json({ message: 'Error adding marker', error });
  }
});

// Route to get markers by key
app.get('/api/markers', async (req, res) => {
  try {
    const key = req.query.key;
    const markers = await Marker.find({ key });
    res.json(markers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching markers', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
