const CustomAPIError = require('./custom-error');

class UnauthenticatedError extends CustomAPIError {
    constructor(message) {
        super(message)
        this.statusCode = 401 // bad request
    }
}

module.exports = UnauthenticatedError