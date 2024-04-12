const adminUser = require('../../models/AdminModel/adminAuthModel');
const jwt = require('jsonwebtoken');

module.exports.refreshToken = async function(req, res) {
    const { refresh_token } = req.body;
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(401);
        const user = await adminUser.findAll({refresh_token: refreshToken});
        if(!user.id_number) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_KEY, (err, decoded) => {
            if(err) return res.sendStatus(403);
            const userId = user.id;
            const fName = user.first_name;
            const accessToken = jwt.sign({ userId, fName }, process.env.SECRET_KEY, {
                expiresIn: '15s'
            });
            res.json({ accessToken })
        })
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error');     
    }
}