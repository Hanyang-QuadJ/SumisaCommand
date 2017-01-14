var express = require('express');
var router = express.Router();
var ID = null;
/* GET home page. */
router.get(['/','/index'], function(req, res, next) {
  res.render('Login/index');
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
    res.render('Student/student',{ID:ID});
});
router.get('/parent', function(req, res, next) {
    res.render('Parent/parent',{ID:ID});
});
router.get('/admin', function(req, res, next) {
    res.render('admin');
});
router.get('/teacher', function(req, res, next) {
    res.redirect('teacher/notice')
});
router.get('/teacher/notice', function(req, res, next) {
    res.render('Teacher/notice/notice',{ID:ID});
});
router.get('/teacher/lecturer', function(req, res, next) {
    res.render('Teacher/lecturer/lecturer',{ID:ID});
});
router.get('/teacher/mylecture', function(req, res, next) {
    res.render('Teacher/mylecture/mylecture',{ID:ID});
});

module.exports = router;
