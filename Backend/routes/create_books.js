const express = require('express');
const router = express.Router();
const Book = require('../models/book')

const { format } = require('date-fns')

const curd = new Date()
const today = format(curd, 'yyyy-MM-dd')

router.post('/addbook', async (req, res) => {

    try {
        const newbook = new Book({
            book_name: req.body.book_name,
            book_author: req.body.book_author,
            book_price: req.body.book_price,
            book_publish_date: today
           
        })
       const savebook = await newbook.save()
       res.json(savebook)
    } catch (error) {
        console.error('Error adding book:', error);
    }
})
module.exports = router