const express = require('express');

const app = express();


// app.get("/",(req,res)=>{
//     res.send("hello world")
// })

app.get('/api/jokes',(req,res)=>{

    const jokes = 
    [
        {
            id:1,
            title:"a joke",
            content:"this a joke"
        },
        {
            id:2,
            title:"a joke",
            content:"this a another joke"
        },
        {
            id:3,
            title:"a joke",
            content:"this a third joke"
        },
        {
            id:4,
            title:"a joke",
            content:"this a joke"
        },
        {
            id:5,
            title:"a joke",
            content:"this a joke"
        }
    ]

    res.send(jokes);

})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("server at port")


})