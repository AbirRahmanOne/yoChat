// external imports
const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const path = require("path");

// internal imports 
const connectDB = require('./config/db')
const {notFoundHandler, errorHandler } = require('./middlewares/common')



const app =express()
dotenv.config()

// variable naming 
let port = process.env.PORT || 5000 

//DB connection 
connectDB()

// request parsers
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET))

/*
app.get("/", (req, res)=>{
    console.log(process.env.APP_NAME);

})
*/

// routing setup


// 404 not found handler
app.use(notFoundHandler);

// common error handler
app.use(errorHandler);


app.listen(port, ()=>{
    console.log(`This application is running at port ${port}`);
})
