const express = require('express');
require('dotenv').config();


const app = express();
const port = 3000;


app.get("/",(req,res)=>{
    res.send("hello world");
})

app.get("/login",(req,res)=>{
    res.send("this is the login page");
})

app.get("/signup",(req,res)=>{
    res.send("this is the signup page");
})

app.listen(process.env.PORT, ()=>{
    console.log("app is listening")

})