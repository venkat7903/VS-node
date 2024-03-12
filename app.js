const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.use(
  cors({
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);


app.get('/', (req, res) => {
    res.send('Hi welcome')
});

app.get('/date', (req, res) => {
    res.send(new Date())
});

app.listen(3001);

module.exports = app;