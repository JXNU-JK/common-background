const sql = {
  // user
  loginSql: 'select * from user where username = ?',
  serachUserInfoSql: '',
  tokenUpdateSql: 'update user set token=?,tokenExpiredDate=? where id=?',
  // home
  homeInfoSql1: 'select * from anime  where isHome = 1',
  homeInfoSql2: 'select * from anime_character where animeId = ?'
}
module.exports = sql