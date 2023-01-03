// check username, password in post(login) request
// if exist create new JWT
// send back to front-end
// setup authentication so only the request with JWT can
// access the dashboard

const login = (req, res) =>{
    res.send('Fake Login/Register/Signup Route')
}

const dashboard = async (req, res) =>{
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({msg:`Hello, John Doe`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`})
}

module.exports = {
    login,
    dashboard
}