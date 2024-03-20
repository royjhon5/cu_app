const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const parser = require('cookie-parser');

app.use(express.json());
app.use(cors());

require('./routes/routerManager')(app);
app.listen(8000, "127.0.0.1");