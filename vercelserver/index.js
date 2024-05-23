
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); 
require('./routes/routerManager')(app);
app.get('/', (req, res) => {
  res.send('This is my serverless server')
})

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})
module.exports = app