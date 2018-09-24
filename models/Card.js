const mongoose = require('mongoose');
const { Schema } = mongoose;

const cardSchema = new Schema({
    body: String,
    title: String
});

module.exports = cardSchema;
