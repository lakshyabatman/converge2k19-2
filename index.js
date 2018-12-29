const express=require('express');
const ejs=require('ejs')
const path=require('path')
const route=require('./route/route.js')
const app=express();
const mongoose=require('mongoose')
mongoose.connect('mongodb://uphaar:uphaar23@ds145434.mlab.com:45434/converge',{ useNewUrlParser: true }).then(()=>{
  console.log("DB CONNECTED")
})
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(route);






app.listen(1111,()=>{
  console.log("Running at 1111");
})
