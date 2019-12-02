const conn = require('../utils/dbUtils.js')
const sql = require('./sql.js')
const loginDao= {
  getUserInfo (id) {
    new Promise((resolve, reject) => {
      conn.query(sql.serachUserIngoSql, id, (err, results) => {
        if (err || !results) {
          reject('error')
        } else if (results !== 1) {
          reject('noData')
        } else {
          resolve(results[0])
        }
      })
    })
  },
  tokenExpired (id) {
    getUserInfo(id).then((res) => {
      return false
    })
    .catch((err) => {
      return true
    })
  }
}
module.exports = loginExpired