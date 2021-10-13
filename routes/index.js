var express = require('express');
var router = express.Router();
const conn = require('../utils/dbUtils.js')
const conn1 = require('../utils/dbUtils.js')
const sql = require('../dbBase/sql.js');

/* 首页信息接口 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* 首页信息接口 */
router.get('/homeInfo', function(req, res, next) {
  var result = {
    youth: [],
    love: [],
    action: []
  }
  conn.query(sql.homeInfoSql1, (err, results) => {
    if (err || !results) {
      return res.json({
        resultCode: 500,
        errorDescription: '获取数据失败'
      })
    }
    results.forEach((item, index) => {
      conn.query(sql.homeInfoSql2, item.animeId, (err, datas) => {
        item.characterList = datas
        if (item.type === 'youth') {
          console.log(1)
          result.youth.push(item)
        } else if (item.type === 'love') {
          result.love.push(item)
        } else if (item.type === 'action') {
          result.action.push(item)
        } else {}
        if (index === results.length - 1) {
          return res.json({
            resultCode: 200,
            data: result
          })
        }
      })
    })
  })
});

module.exports = router;
