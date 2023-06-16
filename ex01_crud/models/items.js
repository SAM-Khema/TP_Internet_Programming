const mongoose = require('mongoose');

const Schema  = mongoose.Schema;

const itemsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Categories',
    required: true
  },
  desc: String
}, {
  timestamps: true
});

itemsSchema.index({ name: 'text' });

const Items = mongoose.model('Items', itemsSchema);

module.exports = Items;
