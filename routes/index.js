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
router.post('/teacher', function(req, res, next) {
    res.render('teacher');
});
router.post('/submit', function(req, res, next) {
    console.log("ID:"+req.body.id);
    res.render('submit.ejs', {req : req, res : res, studentID: req.body.studentID });
});
router.post('/student', function(req, res, next) {
    res.render('student', {req : req, res : res, studentID: req.body.studentID });
});
router.post('/parent', function(req, res, next) {
    res.render('parent.index', {req : req, res : res, studentID: req.body.studentID });
});
router.post('/admin', function(req, res, next) {
    res.render('Admin.index', {req : req, res : res, studentID: req.body.studentID });
});

module.exports = router;
