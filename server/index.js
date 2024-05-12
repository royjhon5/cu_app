const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('user_profile_picture'))
app.use(cookieParser()); 
app.use(cors({
    origin: ["http://localhost:3000"],
    method: ["GET", "POST", "DELETE"],
    credentials: true,
}));
require('./routes/routerManager')(app);
app.listen(8000, "127.0.0.1");