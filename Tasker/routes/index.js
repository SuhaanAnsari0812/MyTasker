const { response } = require('express');
var express = require('express');
var router = express.Router();
var database = require('./users');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;


router.post('/submit',function(req,res){
 database.create({
   todo:req.body.task

 
  })
  .then(function(){
    res.redirect('/mytask')
  })

  
});

router.get('/mytask',function(req,res){
  database.find({},function(error,data){
    if(error){
      console.log(error)
    }
    else{
      console.log(data)
      res.render('task',{a:data})
    }
  });

})

router.get('/remove/:id',function(req,res){
  var id=req.params.id
  database.findByIdAndRemove(id,err =>{
    if(err){
      console.log('error')
    }
    else{
      res.redirect('/mytask')
    }
  });
})

router.post('/edit/:id',function(req,res){
  var id=req.params.id
  database.findByIdAndUpdate(id,{
    todo:req.body.task

  },err =>{
    if(err){
      console.log(err)
    }
    else{
      res.redirect('/mytask')
    }
  })
});
router.get('/edit/:id',function(req,res){
  var id=req.params.id
  database.find({},function(error,data){
    if(error){
      console.log(error)
    }
    else{
      console.log(data)
      res.render('edit',{a:data,id_update:id})
    }
})
});