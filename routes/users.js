var express = require('express');
var router = express.Router();
const conn = require('../utils/dbUtils.js')

/* 登录接口 */
router.post('/login', function(req, res, next) {
  let query = req.body
  let sqlStr = 'select * from user where username = ?'
  conn.query(sqlStr, query.username, (err, results) => {
    if (err) {
      return res.json({
        resultCode: 500,
        errorDescription: '获取数据失败'
      })
    }
    if (results.length !== 1) {
      return res.json({
        resultCode: 500,
        errorDescription: '用户名不存在'
      })
    }
    results.map(item => {
      if (item.password !== query.password) {
        return res.json({
          resultCode: 500,
          errorDescription: '密码错误'
        })
      }
    })
    res.json({
      resultCode: 200,
      errorDescription: ''
    })
  })
});

module.exports = router;
