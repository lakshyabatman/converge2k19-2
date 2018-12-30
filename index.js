const express=require('express');
const ejs=require('ejs')
const path=require('path')
const route=require('./route/route.js')
const app=express();
const pass=require('passport')
const mongoose=require('mongoose')
const config=require('./config/local.js')
const flash=require('express-flash')
const session=require('express-session')
mongoose.connect('mongodb://uphaar:uphaar23@ds145434.mlab.com:45434/converge',{ useNewUrlParser: true }).then(()=>{
  console.log("DB CONNECTED")
})
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(pass.initialize());
app.use(pass.session());
app.set('view engine','ejs');

app.use(session({ cookie: { maxAge: 60000 },
                  secret: 'woot',
                  resave: false,
                  saveUninitialized: false}));
app.use(flash())
app.use(route);






app.listen(1111,()=>{
  console.log("Running at 1111");
})
