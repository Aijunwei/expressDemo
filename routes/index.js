var express = require('express');
var router = express.Router();

router.use(function(req,res,next){
    console.log('middleware');
    next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  console.log('login');
  next();
},function(req,res,next){
    res.send('login page');
});

router.get('/bigpipe',function(req,res){
    var down = 2;
    res.write('<!DOCTYPE html>');
    res.write('<html><head>');
    res.write(`<script>
        function loaded(id,content){
                document.getElementById(id).innerHTML = content;
        }
    </script></head>`);
    setTimeout(function(){
         res.write('<div id="pagelet1"></div>');
         res.write('<script>loaded("pagelet1", "I am pagelet 1!")</script>');

         if(--down === 0){
             res.end('</body></html>');
        }
    }, 1000);
    setTimeout(function(){
         res.write('<div id="pagelet2"></div>');
         res.write('<script>loaded("pagelet2", "I am pagelet 2!")</script>');

         if(--down === 0){
             res.end('</body></html>');
        }
    }, 3000);
});


module.exports = router;
