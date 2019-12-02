var express = require('express');
var router = express.Router();
const conn = require('../utils/dbUtils.js')

/* 登录接口 */
router.post('/login', function(req, res, next) {
  let query = req.body
  console.log(query)
  let sqlStr = 'select * from user where username = ?'
  conn.query(sqlStr, query.username, (err, results) => {
    console.log(results)
    if (err || !results) {
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
    results.forEach(item => {
      if (item.password !== query.password) {
        return res.json({
          resultCode: 500,
          errorDescription: '密码错误'
        })
      } else {
        return res.json({
          resultCode: 200,
          data: results,
          errorDescription: ''
        })
      }
    })
  })
});

/* 
 * 获取用户信息
 * 模拟客户端token和guid
 */

module.exports = router;
