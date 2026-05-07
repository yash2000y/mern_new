const e = require('express')
const mongoose = require('mongoose')
const bookschema = new mongoose.Schema({
    book_name: {
        type: String,
        required: true
    },
    book_author: {
        type: String,
        required: true
    },
    book_price: {
        type: Number,
        required: true
    },
    book_publish_date: {
        type: Date,
        required: true
    },
    status_: {
        type: String,
        enum: ['available', 'unavailable'],
        dafault: 'available'
    }
})
module.exports = mongoose.model('bs_books',bookschema)