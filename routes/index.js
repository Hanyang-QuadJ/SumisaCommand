var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var ID;
router.use(bodyParser.urlencoded({ extended: false }));
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/index', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/teacher', function(req, res, next) {
    res.render('teacher',{ID:ID});
});
router.post('/submit', function(req, res, next) {
    studentID = req.body.ID;
    if(studentID == 2014038213) {
        res.redirect("teacher");
    }
    else if(studentID == 2014038122) {
        res.redirect("student");
    }
    else if(studentID == 2014038022){
        res.redirect("admin");
    }
    else if(studentID == 2014037783){
        res.redirect("parent");
    }



});
router.get('/student', function(req, res, next) {
    res.render('student',{ID:ID});
});
router.get('/parent', function(req, res, next) {
    res.render('parent',{ID:ID});
});
router.get('/admin', function(req, res, next) {
    res.render('admin');
});

module.exports = router;
