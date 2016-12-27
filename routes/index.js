var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/index', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/teacher', function(req, res, next) {
    console.log("state:@@@@@@@@@");
    res.render('teacher');
});
router.post('/submit', function(req, res, next) {
    console.log("ID:"+req.body.studentID);
    res.render('submit',{req:req,res:res,studentID:req.body.studentID});
});
router.get('/student', function(req, res, next) {
    res.render('student');
});
router.get('/parent', function(req, res, next) {
    res.render('parent');
});
router.get('/admin', function(req, res, next) {
    res.render('Admin');
});

module.exports = router;
