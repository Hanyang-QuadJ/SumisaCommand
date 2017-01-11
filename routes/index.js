var express = require('express');
var router = express.Router();
var ID = null;
/* GET home page. */
router.get(['/','/index'], function(req, res, next) {
  res.render('index');
});

/*Page redirecting based on ID*/
router.post('/submit', function(req, res, next) {
    ID = req.body.ID;
    if(ID == 'teacher') {
        res.redirect('teacher');
    }
    else if(ID == 'student') {
        res.redirect('student');
    }
    else if(ID == 'admin'){
        res.redirect('admin');
    }
    else if(ID == 'parent'){
        res.redirect("parent");
    }
});

/*page rendering*/
router.get('/student', function(req, res, next) {
    res.render('student',{ID:ID});
});
router.get('/parent', function(req, res, next) {
    res.render('parent',{ID:ID});
});
router.get('/admin', function(req, res, next) {
    res.render('admin');
});
router.get('/teacher', function(req, res, next) {
    res.render('teacher',{ID:ID});
});
router.get('/lecture/mylecture', function(req, res, next) {
    res.render('lecture/mylecture',{ID:ID});
});

module.exports = router;
