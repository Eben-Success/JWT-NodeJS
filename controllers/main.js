// check username, password in post(login) request
// if exist create new JWT
// send back to front-end
// setup authentication so only the request with JWT can
// access the dashboard

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

    console.log(username, password);
    res.send('Fake Login/Register/Signup Route')
}

const dashboard = async (req, res) =>{
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({msg:`Hello, John Doe`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`})
}

module.exports = {
    login,
    dashboard,
}