const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send("Hi, I am Kai");
})

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`I am listening on port ${port}`)
})
