/**
 * Created by pleiades on 2017. 1. 1..
 */
var express = require('express');
var router = express.Router();

router.get('/',function (res,res,next) {
    res.render('about',{ttile: 'about',name:'tony'});
});

module.exports = router;