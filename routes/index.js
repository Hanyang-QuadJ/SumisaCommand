var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var studentID;
router.use(bodyParser.urlencoded({ extended: false }));
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/index', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/teacher', function(req, res, next) {
    res.render('teacher',{studentID:studentID});
});
router.post('/submit', function(req, res, next) {
    studentID = req.body.studentID;
    res.render('submit',{req:req,res:res,studentID:studentID});
});
router.get('/student', function(req, res, next) {
    res.render('student',{studentID:studentID});
});
router.get('/parent', function(req, res, next) {
    res.render('parent',{studentID:studentID});
});
router.get('/admin', function(req, res, next) {
    res.render('admin',{studentID:studentID});
});

module.exports = router;
