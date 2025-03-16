const express = require('express'); //  there are two methods to import file in js i.e common js and module js
// import express from "express"; == this syntax was module js
// if we want to use this syntax then there is some changes we should do 
// i.e is 

const app = express()

app.get('/', (req,res) =>{
    res.send('Server is Ready')
});

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server at http://localhost:${port}`);
    
})

