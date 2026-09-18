const express = require('express');
const path = require('path');
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8080;

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

let users=[
    {id:1,name:'Bolton',age:40},
    {id:2,name:'Adeyemi',age:22},
    {id:3,name:'Kayode',age:35},
    {id:4,name:'Toni',age:100},
];

app.get('/',(req,res) => {
    res.render('index',{users});
})
app.listen(port,()=> {
    console.log('Welcome to Backend')
})