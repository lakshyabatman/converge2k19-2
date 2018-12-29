const mongoose=require('mongoose');
const schema=mongoose.Schema
const bycrypt=require('bcrypt-nodejs')

const user=new schema({
  fname:{
    type:String,
    required:true
  },
  lname:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  team_id:{
    type:String
  },
  password:{type:String},
  college:{
    type:String
  },
  events:{
    type:[String]
  }
})


user.pre('save',function(next){
  var user=this;
  if(!user.isModified('password')) return next();
  bycrypt.genSalt(10,function(err,salt){

    if(err)
    {
      return next(err);
    }
    bycrypt.hash(user.password,salt,null,function(err,hash){
      user.password=hash;
      next();
    })
  })
})
user.methods.compare=function(pass){
return bycrypt.compareSync(pass,this.password);
}


var use=mongoose.model('user',user);
module.exports=use;
