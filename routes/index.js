var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/index', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.post('/submit', function(req, res, next) {
    res.render('submit', {req : req, res : res, id: req.body.id });
});
router.post('/teacher', function(req, res, next) {
    res.render('teacher_main', {req : req, res : res, id: req.body.id });
});
router.post('/student', function(req, res, next) {
    res.render('student_main', {req : req, res : res, id: req.body.id });
});
router.post('/parent', function(req, res, next) {
    res.render('parent_main', {req : req, res : res, id: req.body.id });
});

module.exports = router;
