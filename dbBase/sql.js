const sql = {
  loginSql: 'select * from user where username = ?',
  serachUserIngoSql: '',
  tokenUpdateSql: 'update user set token=?,tokenExpiredDate=? where id=?'
}
module.exports = sql