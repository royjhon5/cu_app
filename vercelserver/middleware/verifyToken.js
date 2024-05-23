const jwt = require('jsonwebtoken');
const adminUser = require('../models/AdminModel/adminAuthModel');
 
module.exports.verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.status(400).json({ error: 'pisting nga verify di ga gana' });
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if(err) return res.status(400).json({ error: 'Utro sad ning buang' });
        req.id_number = decoded.id_number;
        next();
    })
}
