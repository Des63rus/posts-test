const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  email: { type: 'String', required: true },
  text: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

mongoose.model('post', postSchema);