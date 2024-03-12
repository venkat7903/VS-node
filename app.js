const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hi welcome')
})

app.get('/date', (req, res) => {
    res.send(new Date())
})

app.listen(3001)