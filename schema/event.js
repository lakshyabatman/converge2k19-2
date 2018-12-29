const mongoose=require('mongoose');
const schema=mongoose.Schema


const event=new schema({
  Name:{
    type:String
  },
  team:{
    type:[String]
  },
  teamNumber:{
    type:Number,
    defualt:0
  },
  eid:{
    type:String
  }
})

var use=mongoose.model('event',event);
module.exports=use;
