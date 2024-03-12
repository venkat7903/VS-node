const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hi welcome')
})

app.get('/date', (req, res) => {
    res.send(new Date())
})

app.listen(3001)

module.exports = app