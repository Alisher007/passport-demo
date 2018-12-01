var express = require('express');
var router = express.Router();
var User = require('../db/User');

/* GET home page. */
router.get('/', function(req, res, next) {
  User.find({},function (err,doc) {
    if (err) {
        res.status(500).send('error occured')
    }else{
      res.render('index', { title: 'Express', user: doc });
    }
  });
  // res.render('index', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login');
});
router.get('/signup', function(req, res, next) {
  res.render('signup');
});
router.get('/profile', function(req, res, next) {
  res.send(req.session);
});

module.exports = router;
