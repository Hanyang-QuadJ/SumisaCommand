var express = require('express');
var router = express.Router();

/* GET users listing. */
module.exports = router;
router.post('/submit', function(req, res, next) {
    res.render(submit.ejs, {req : req, res : res, id: req.body.id });
});

router.post('/teacher', function(req, res, next) {
    res.render(submit.ejs, { id: req.body.id });
});
