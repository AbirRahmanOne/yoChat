const express = require('express')
const dotenv = require('dotenv')

// Import another modules
const connectDB = require('./config/db')


dotenv.config()
const app =express()
let port = process.env.PORT || 5000 

//DB connection 
connectDB()



app.get("/", (req, res)=>{
    console.log(process.env.APP_NAME);

})


app.listen(port, ()=>{
    console.log(`This application is running at port ${port}`);
})
