const mysql = require('mysql');
// import mysql from 'mysql';
const  conn = mysql.createConnection({
    host: '127.0.0.1', // 数据库的地址
    user: 'root', // 账号
    password: '123456', // 密码
    database: 'pdd', // 数据库名称
});
conn.connect();

module.exports = conn;