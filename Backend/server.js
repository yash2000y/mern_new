const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db') 

const createBooksRoute = require('./routes/create_books')

const app = express()

app.use(bodyParser.json())

app.use(cors())

app.use('/api', createBooksRoute)

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server running on - http://localhost:${port}`);
})