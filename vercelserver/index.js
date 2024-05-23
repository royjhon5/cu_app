
const express = require('express')
const app = express();
const PORT = 8000

require('./routes/routerManager')(app);
app.get('/', (req, res) => {
  res.send('This is my serverless server')
})

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})
module.exports = app