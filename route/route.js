const route=require('express').Router();
const body=require('body-parser');
var url=body.urlencoded({ extended:false})
const user=require('../schema/user.js')
route.get('/',function(req,res){
  res.send('hello');
})


route.post('/usersignup',url,(req,res)=>{
  console.log(req.body)
 var use=new user()


 use.fname=req.body.fname;
 use.lname=req.body.lname;
 use.email=req.body.email;
 use.team_id=Math.floor(Math.random()*(1000-1)+1)
 use.password=req.body.password
 use.college=req.body.college
 console.log(use)
 user.findOne({email:use.email}).then((us)=>{
   if(!us)
   {
     use.save().then((used)=>{
       console.log(used+' saved')
     })
   }
   else {
     console.log("User already exist")
   }
 })
})

route.get('/ch',function(req,res){
  res.render('index')
})


module.exports=route
