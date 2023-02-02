const CustomAPIError = require('./custom-error');

class BadRequest extends CustomAPIError {
    constructor(message) {
        super(message)
        this.statusCode = 400 // bad request
    }
}

module.exports = BadRequest