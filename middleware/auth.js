const config = require('config');
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const token = req.header('x-auth-token');
    // Check for token
    if (!token)
        return res.status(401).json(GlobalErrorRespose('No token, authorization denied'));
    try {
        req.user = jwt.verify(token, config.get('jwtSecret'));
        next();
    } catch (e) {
        res.status(400).json(GlobalErrorRespose('Token is not valid'));
    }
}

module.exports = auth;