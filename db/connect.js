const mongoose = require('mongoose')

const connectDB = (url) => {
    return connect(url)
}

export default connectDB