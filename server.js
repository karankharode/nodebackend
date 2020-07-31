const express = require('express')
const morgan = require('morgan')
const cors= require('cors') 
const connectDB= require('./config/db')
const passport = require('passport')
const bodyParser = require('body-parser')
const routes = require('./routes/index')

connectDB()
// Aik file open karun thev sgde 

const app = express()

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json)
app.use(morgan('combined'))
app.use(routes)
 
app.listen(process.env.PORT || '8080' , ()=>{
    console.log(`app is running at ${process.env.PORT}`);
})
