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

markerSchema.index({ location: '2dsphere' });
const Marker = mongoose.model('Marker', markerSchema);

