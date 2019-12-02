var express = require('express');
var router = express.Router();

/* 首页信息接口 */
router.get('/homeInfo', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
