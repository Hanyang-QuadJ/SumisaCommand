var express = require('express');
var router = express.Router();
var firebase = require('firebase');
var ID = null;

/* Student */
var student = function (s_id, s_name, s_school, s_phone, s_state) {
    this.s_id = s_id;
    this.s_name = s_name;
    this.s_school = s_school;
    this.s_phone = s_phone;
    this.s_state = s_state;
};
var s = new student();

var config = {
    apiKey: "AIzaSyAnf59-0cgsAcDmplvQKHcXYCmTySAv3GA",
    authDomain: "sumisa-50c79.firebaseapp.com",
    databaseURL: "https://sumisa-50c79.firebaseio.com",
    storageBucket: "sumisa-50c79.appspot.com",
    messagingSenderId: "692869677834"
};
firebase.initializeApp(config);


/* GET home page. */
router.get(['/','/index'], function(req, res, next) {
    res.render('Login/index');
});

/*Page redirecting based on ID*/
router.post('/submit', function(req, res, next) {
    ID = req.body.ID;


    const dbRefObject = firebase.database().ref().child('student');

    //If exists, return true
    dbRefObject.orderByChild("s_id").equalTo(ID).once("value", function(snapshot) {
        var userData = snapshot.val();
        if (userData){
            res.redirect('student');
        }else {
            console.log("There is no user for your ID");
        }
    });

    //Ordering and finding
    dbRefObject.orderByChild("s_id").equalTo(ID).on("child_added", function(snapshot) {

        s.s_name = snapshot.child('s_name').val();
        s.s_id = snapshot.child('s_id').val();
        s.s_phone = snapshot.child('s_phone').val();
        s.s_school = snapshot.child('s_school').val();
        s.state = snapshot.child('s_state').val();

    });

    if(ID == 'teacher') {
        res.redirect('teacher');
    }
    else if(ID == 'student') {

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
    res.render('Student/student',{student: s});
});
router.get('/parent', function(req, res, next) {
    res.render('Parent/parent',{ID:ID});
});
router.get('/admin', function(req, res, next) {
    res.redirect('admin/mg_notice');
});
router.get('/admin/mg_student', function(req, res, next) {
    res.render('Admin/mg_student/mg_student',{ID:ID});
});
router.get('/admin/mg_lecturer', function(req, res, next) {
    res.render('Admin/mg_lecturer/mg_lecturer',{ID:ID});
});
router.get('/admin/mg_notice', function(req, res, next) {
    res.render('Admin/mg_notice/mg_notice',{ID:ID});
});
router.get('/admin/mytask', function(req, res, next) {
    res.render('Admin/mytask/mytask',{ID:ID});
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
router.get('/teacher/data', function(req, res, next) {
    res.render('Teacher/data/data',{ID:ID});
});

module.exports = router;
