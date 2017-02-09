var express = require('express');
var router = express.Router();
// var firebase = require('firebase');
// var ID = null;
// var userType = null;
//
// /* Student */
// var student = function (s_id, s_name, s_school, s_phone, s_state) {
//     this.s_id = s_id;
//     this.s_name = s_name;
//     this.s_school = s_school;
//     this.s_phone = s_phone;
//     this.s_state = s_state;
// };
// var s = new student();

/* GET home page. */
router.get(['/','/index'], function(req, res, next) {
    res.render('Login/index');
});

router.get(['/','/indexError'], function(req, res, next) {
    res.render('Login/indexError');
    res.send('<script type="text/javascript">alert("There is no ID matching");</script>');

});

/*Page redirecting based on ID*/
router.post('/submit', function(req, res, next) {
    // res.render('Student/student');
    // ID = req.body.ID;
    // userType = req.body.userType;
    // if (userType == 'student') {
    //     const studentRefObject = firebase.database().ref().child('student');
    //
    //     //If exists, return true
    //     studentRefObject.orderByChild("s_id").equalTo(ID).once("value", function(snapshot) {
    //         var userData = snapshot.val();
    //         if (userData){
    //             res.redirect('student');
    //         }else {
    //             res.redirect('indexError');
    //         }
    //     });
    //
    //     //Ordering and finding
    //     studentRefObject.orderByChild("s_id").equalTo(ID).on("child_added", function(snapshot) {
    //
    //         s.s_name = snapshot.child('s_name').val();
    //         s.s_id = snapshot.child('s_id').val();
    //         s.s_phone = snapshot.child('s_phone').val();
    //         s.s_school = snapshot.child('s_school').val();
    //         s.state = snapshot.child('s_state').val();
    //
    //     });
    // }else if(userType == 'teacher') {
    //     const teacherRefObject = firebase.database().ref().child('teacher');
    //
    //
    // }
    //
    //
    //
    // if(ID == 'teacher') {
    //     res.redirect('teacher');
    // }
    // else if(ID == 'student') {
    //
    // }
    // else if(ID == 'admin'){
    //     res.redirect('admin');
    // }
    // else if(ID == 'parent'){
    //     res.redirect("parent");
    // }
});

/*page rendering*/
router.get('/student', function(req, res, next) {
    res.render('Student/student');
});
router.get('/parent', function(req, res, next) {
    res.render('Parent/parent');
});
router.get('/admin', function(req, res, next) {
    res.redirect('admin/mg_notice');
});
router.get('/#/login',function(req, res, next){
    res.redirect('teacher');
})

/*Admin-Student page rendering*/
router.get('/admin/mg_student', function(req, res, next) {
    res.render('Admin/student/mg_student/mg_student');
});
router.get('/admin/student_info', function(req, res, next) {
    res.render('Admin/student/student_info/student_info');
});
router.get('/admin/student_status', function(req, res, next) {
    res.render('Admin/student/student_status/student_status');
});

/*Admin-Lecture page rendering*/
router.get('/admin/lecture_status', function(req, res, next) {
    res.render('Admin/lecture/lecture_status/lecture_status');
});
router.get('/admin/lecture_info', function(req, res, next) {
    res.render('Admin/lecture/lecture_info/lecture_info');
});
router.get('/admin/mg_lecture', function(req, res, next) {
    res.render('Admin/lecture/mg_lecture/mg_lecture');
});

/*Admin-Lecturer page rendering*/

router.get('/admin/teacher_status', function(req, res, next) {
    res.render('Admin/teacher/teacher_status/teacher_status');
});

router.get('/admin/mg_teacher', function(req, res, next) {
    res.render('Admin/teacher/mg_teacher/mg_teacher');
});

/*Admin-Notice page rendering*/
router.get('/admin/mg_notice', function(req, res, next) {
    res.render('Admin/mg_notice/mg_notice');
});

/*Admin-Mytask page rendering*/
router.get('/admin/mytask', function(req, res, next) {
    res.render('Admin/mytask/mytask');
});


/*Teacher page rendering*/
router.get('/teacher', function(req, res, next) {
    res.redirect('teacher/notice');
});
router.get('/teacher/notice', function(req, res, next) {
    res.render('Teacher/notice/notice');
});
router.get('/teacher/lecturer', function(req, res, next) {
    res.render('Teacher/lecturer/lecturer');
});
router.get('/teacher/mylecture', function(req, res, next) {
    res.render('Teacher/mylecture/mylecture');
});
router.get('/teacher/data', function(req, res, next) {
    res.render('Teacher/data/data');
});

module.exports = router;
