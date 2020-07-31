const mongoose = require('mongoose')
const dbConfig = require('./dbconfig')

const connetDB = async() => {
    try {
        const conn = await mongoose.connect(dbConfig.database, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`)


    }
    catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = connetDB
