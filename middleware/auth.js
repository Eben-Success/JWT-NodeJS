const jwt = require('jsonwebtoken');
const CustomerAPIError = require('../errors/custom-error');
const {UnauthenticatedError} = require('../errors/unauthenticated');

const authenticationMiddleware = async (req, res, next) => {
     const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')){
        throw new UnathenticatedError('No token Provided')
    }

    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const { id, username } = decoded
        req.user = { id, username }
        next()
    } catch (error) {
        throw new UnauthenticatedError('Not authorized to access this route');
    }


}


module.exports = authenticationMiddleware

