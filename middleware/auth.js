const jwt = require('jsonwebtoken');
const CustomerAPIError = require('../errors/custom-error');

const authenticationMiddleware = async (req, res, next) => {
     const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')){
        throw new CustomerAPIError('No token provided', 401) // status: authentication error
    }

    const token = authHeader.split(' ')[1]
    next()
}


module.exports = authenticationMiddleware

