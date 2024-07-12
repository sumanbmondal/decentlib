const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://darkmatter:cc129txIH@cluster0.ta1ztdq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', async () => {
  console.log('Connected to the database');

  // Drop the entire database
  await db.dropDatabase();
  console.log('Database dropped');

  mongoose.connection.close();
});

db.on('error', (error) => {
  console.error('Connection error:', error);
});
