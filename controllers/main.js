// check username, password in post(login) request
// if exist create new JWT
// send back to front-end
// setup authentication so only the request with JWT can
// access the dashboard

const jwt = require('jsonwebtoken')
const CustomerAPIError = require('../errors/custom-error')

const login = (req, res) =>{
    const {username, password} = req.body

    // mongo
    //Joi
    // check in the controller

    if (!username || !password){
        // if error, we will get 400: bad request
        throw new CustomerAPIError('Please provide email and password', 400)
    }

    // just for demo, normally provided by DB
    const id = new Date().getDate()

    // try to keep the payload small, better experience for user
    // just for demo, in production, use long, complex and unguessable string value!
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn:'3000d'})

    res.status(200).json({msg:'user created'}, token)
}

const dashboard = async (req, res) =>{ 
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')){
        throw new CustomerAPIError('No token Provided', 401) // authentication error
    }

    const token = authHeader.split(' ')[1]
    console.log(token);

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decoded);
        const luckyNumber = Math.floor(Math.random() * 100)
        res.status(200).json({msg:`Hello, ${decoded.username}`,
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`})

    } catch (error) {
        throw new CustomerAPIError('Not authorized to access this route', 401) // status: authentication error
    }
    console.log(token);

}

module.exports = {
    login,
    dashboard,
}