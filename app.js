const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hi welcome')
})

app.listen(3001)