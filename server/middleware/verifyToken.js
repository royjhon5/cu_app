const jwt = require('jsonwebtoken');
 
module.exports.verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if(err) return res.sendStatus(403);
        req.id_number = decoded.id_number;
        next();
    })
}