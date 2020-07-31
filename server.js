const express = require('express')
const morgan = require('morgan')
const cors= require('cors') 
const dotenv = require('dotenv')
const connectDB= require('./config/db')
const passport = require('passport')
const bodyParser = require('body-parser')
const routes = require('./routes/index')


dotenv.config({ path : './config/config.env'})

connectDB()
// Aik file open karun thev sgde 

const app = express()

//Body Parser
app.use(express.urlencoded({ extended:false}))
app.use(express.json())


if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(routes)
app.use(passport.initialize())
require('./config/passport')(passport)



app.listen(process.env.PORT || 3000 , ()=>{
    console.log(`app is running at ${process.env.PORT}`);
})
