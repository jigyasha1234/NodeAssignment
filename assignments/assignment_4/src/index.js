const express = require("express");

require("./db/conn")

const app = express();
const port = process.env.PORT || 5000;


app.get("/",(req,res) => {res.send("hello")});
app.post("/hii",(req,res) => {res.send("hii")});


app.listen(port,() =>{
    console.log(`connection is setup at ${port}`)
})