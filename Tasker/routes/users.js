var mongoose=require('mongoose');
var uri=('mongodb+srv://Chandana:cvml462ccl4*@mytasker.wknnc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
mongoose.connect(uri)
var schema=mongoose.Schema({
  todo:{
    type:String,
    required:true
  }
})

module.exports = mongoose.model('tasks',schema)