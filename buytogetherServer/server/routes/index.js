const express = require('express');
const router = express.Router();
const conn = require('../db/db')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/**
 * 获取首页轮播图
 */
router.get('/api/homecasual', (req, res)=>{
  /* let sqlStr = 'select * from homecasual';
   conn.query(sqlStr, (err, results) => {
       if (err) return res.json({err_code: 1, message: '资料不存在', affextedRows: 0})
       res.json({success_code: 200, message: results, affextedRows: results.affextedRows})
   })*/
   const data = require('../data/homecasual');
   res.json({success_code: 200, message: data})
});

/**
* 获取首页导航
*/
router.get('/api/homenav', (req, res)=>{
  /*
  let sqlStr = 'select * from homenav';
   conn.query(sqlStr, (err, results) => {
       if (err) return res.json({err_code: 1, message: '资料不存在', affextedRows: 0})
       res.json({success_code: 200, message: results, affextedRows: results.affextedRows})
   })
   */
   const data = require('../data/homenav');
   res.json({success_code: 200, message: data});
});

/**
* 获取首页商品列表
*/
router.get('/api/homeshoplist', (req, res)=>{
   /*
  let sqlStr = 'select * from homeshoplist';
   conn.query(sqlStr, (err, results) => {
       if (err) return res.json({err_code: 1, message: '资料不存在', affextedRows: 0})
       res.json({success_code: 200, message: results, affextedRows: results.affextedRows})
   })
   */
   setTimeout(function () {
        const data = require('../data/shopList');
        res.json({success_code: 200, message: data})
   }, 300);
});

/**
* 获取推荐商品列表
*/
router.get('/api/recommendshoplist', (req, res)=>{
   setTimeout(function () {
       const data = require('../data/recommend');
       res.json({success_code: 200, message: data})
   }, 10);
});

/**
* 获取推荐商品列表拼单用户
*/
router.get('/api/recommenduser', (req, res)=>{
   setTimeout(function () {
       const data = require('../data/recommend_users');
       res.json({success_code: 200, message: data})
   }, 10);
});

/**
* 获取搜索分类列表
*/
router.get('/api/searchgoods', (req, res)=>{
   setTimeout(function () {
       const data = require('../data/search');
       res.json({success_code: 200, message: data})
   }, 10);
});

module.exports = router;
