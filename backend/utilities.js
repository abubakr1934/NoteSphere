const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);
    // const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    // console.log(token);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        // console.log(decodedToken)
        // console.log(token);
        // console.log(err);
        if (err) return res.sendStatus(403); 
        
        req.user = user;
        next();
    });
}

module.exports = {
    authenticateToken,
};
