const mongoose=require('mongoose');
const schema=mongoose.Schema

const team=new schema({
team_id:{
  type:String
},
team_member:{
  type:[String]
}
})


var use=mongoose.model('team',team);
module.exports=use;
