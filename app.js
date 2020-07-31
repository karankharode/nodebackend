// This is the alternate way to create a server without using express



// const http = require('http')
// // const { response } = require('express')
// const port = 3000
// const routes = require('./routes/index')
// const connectDB= require('./config/db')

// connectDB()



// const server = http.createServer(function(req,res){
//     response.write("Hello kk4")
//     res.end()
// })

// server.use(routes)


// server.listen(port, function(error){
//     if(error){
//         console.log('Something went wrong', error)
//     }
//     else{
//         console.log('Server is listening on port  '+ port)
//     }
// })