const mongoose = require('mongoose');
const { Schema } = mongoose;
const cardSchema = require('./Card');

const deckSchema = new Schema(
  {
    'title' : String,
    'cards': [cardSchema],
    'date_created': {
      type: Date,
      default: Date.now
    },
    'number_of_subscribers': {
      type: Number,
      default: 0
    },
    _user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  }
);

mongoose.model('decks', deckSchema);
