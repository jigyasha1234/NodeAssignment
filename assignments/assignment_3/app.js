const express = require('express')
// const faker = require('faker')
const path=require("path")
const app = express()
const bodyparser = require('body-parser')

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended : true
}))



const port = 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
app.use(express.static('public'))

var users = [{
    name: "jigyasha",
    email : "jig@gmail.com",
  },{
    name: "abc",
    email : "abc@gmail.com",
  },{
    name: "xyx",
    email : "xyz@gmail.com",
  }]

app.get('/', (req, res) => {
  res.render('index',{users})
})

app.get('/form', (req, res)=>{
  res.render('form')
})
app.post('/user/add', (req, res)=>{
  users.push({
    name : req.body.names,
    email : req.body.email
  })
  res.redirect('/')
})

app.listen(port);