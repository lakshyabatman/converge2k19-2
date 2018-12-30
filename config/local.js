const passport=require('passport');
const local=require('passport-local').Strategy;
const user=require('../schema/user');
passport.serializeUser(function(user,done){
  done(null,user._id);
});

passport.deserializeUser(function(id,done){
  user.findById(id,function(er,use){
    done(er,use);
  })
})
passport.use(new local({
  usernameField:'email',
  passwordField:'password',
  passReqToCallback:true
},function(req,email,pass,done){
  user.findOne({email:email}).then(function(da){

    if(!da)
    {
      return done(null,false,req.flash("login","No user found"))
    }
    else if(!da.compare(pass))
    {
      return done(null,false,req.flash("login","Wrong password pal"))
    }
    else {
      console.log(da)
      return done(null,da)
    }
    })

}))
exports.isAuth=function(req,res,next)
{
  if(req.isAuth)
  {
    return next();
  }
  res.redirect('/login');
}
