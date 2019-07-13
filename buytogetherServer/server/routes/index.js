const express = require('express');
const router = express.Router();
const conn = require('../db/db')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: '这是一个用express框架搭建的拼多多服务器' });
});

//向数据库中批量插入数据

// //1.得到一个数据的数组，数组中的元素是商品对象，保存每个商品的信息
// let recommendShoplistArr = require('../data/recommend').data;
// //2.定义一个api
// router.get('/api/insertRecommend', function (req, res, next) {
//     let array = [];
    
//     recommendShoplistArr.forEach((element, index) => {
//         //新建一个数组，把每个商品对象的数据保存到这个数组
//         let array_item = [];
//         element.goods_id = element.goods_id;
//         array_item.push(element.goods_id);
//         array_item.push(element.goods_name);
//         array_item.push(element.short_name);
//         array_item.push(element.thumb_url);
//         array_item.push(element.hd_thumb_url);
//         array_item.push(element.image_url);
//         array_item.push(element.babels.join(','));
//         array_item.push(element.price);
//         array_item.push(element.normal_price);
//         array_item.push(element.market_price);
//         array_item.push(element.sales_tip);
//         //把每个小数组存入大数组中,形成一个二维数组
//         array.push(array_item)
//     });
// //    console.log(array);
//     //3.执行sql语句
//     let sqlStr = "INSERT INTO recommend(`goods_id`,`goods_name`,`short_name`, `thumb_url`, `hd_thumb_url`, `image_url`,`babels`, `price`, `normal_price`, `market_price`, `sales_tip`) VALUES ?";
//     conn.query(sqlStr, [array], (error, results, fields) => {
//         if (error) {
//             console.log(error);
//             console.log('插入失败');
//         } else {
//             console.log('插入成功');
//         }
//     });
// })


// //1.得到一个数据的数组，数组中的元素是商品对象，保存每个商品的信息
// let shopListtArr = require('../data/shopList').data;
// //2.定义一个api
// router.get('/api/insertshopList', function (req, res, next) {
//     let array = [];
    
//     shopListtArr.forEach((element, index) => {
//         //新建一个数组，把每个商品对象的数据保存到这个数组
//         let array_item = [];
//         element.goods_id = element.goods_id;
//         array_item.push(element.goods_id);
//         array_item.push(element.goods_name);
//         array_item.push(element.short_name);
//         array_item.push(element.thumb_url);
//         array_item.push(element.hd_thumb_url);
//         array_item.push(element.image_url);
//         array_item.push(element.babels.join(','));
//         array_item.push(element.price);
//         array_item.push(element.normal_price);
//         array_item.push(element.market_price);
//         array_item.push(element.sales_tip);
//         //把每个小数组存入大数组中,形成一个二维数组
//         array.push(array_item)
//     });
// //    console.log(array);
//     //3.执行sql语句
//     let sqlStr = "INSERT INTO recommend(`goods_id`,`goods_name`,`short_name`, `thumb_url`, `hd_thumb_url`, `image_url`,`babels`, `price`, `normal_price`, `market_price`, `sales_tip`) VALUES ?";
//     conn.query(sqlStr, [array], (error, results, fields) => {
//         if (error) {
//             console.log(error);
//             console.log('插入失败');
//         } else {
//             console.log('插入成功');
//         }
//     });
// })






/*
 * 获取首页轮播图
 */
router.get('/api/homecasual', (req, res) => {
    let sqlStr = 'select * from homecasual';
    conn.query(sqlStr, (err, results) => {
        if (err)
            return res.json({ err_code: 0, message: '数据请求失败' })
        else
            //console.log(results);
            //从数据中查找后返回的结果results是一个数组，数组元素是对象
            // console.log();
          
            res.json({ success_code: 200, message: results })
           
    })
    //    const data = require('../data/homecasual');
    //    res.json({success_code: 200, message: data})
});

/**
* 获取首页导航
*/
router.get('/api/homenav', (req, res) => {

    let sqlStr = 'select * from homenav';
    conn.query(sqlStr, (err, results) => {
        if (err)
            return res.json({ err_code: 0, message: '数据请求失败' })
        else
            res.json({ success_code: 200, message: results })
    })
    // const data = require('../data/homenav');
    // res.json({ success_code: 200, message: data });
});

/**
* 获取首页商品列表
*/
router.get('/api/homeshoplist', (req, res) => {
    /*
   let sqlStr = 'select * from homeshoplist';
    conn.query(sqlStr, (err, results) => {
        if (err) return res.json({err_code: 1, message: '资料不存在', affextedRows: 0})
        res.json({success_code: 200, message: results, affextedRows: results.affextedRows})
    })
    */
    setTimeout(function () {
        const data = require('../data/shopList');
        res.json({ success_code: 200, message: data })
    }, 300);
});

/**
* 获取推荐商品列表
*/
router.get('/api/recommendshoplist', (req, res) => {

    // setTimeout(function () {
    //     const data = require('../data/recommend');
    //     res.json({ success_code: 200, message: data })
    // }, 10);
    let startIndex = req.query.startIndex || 1;
    let size = req.query.size || 20;

    let sqlStr = `select * from recommendshoplist limit ${(startIndex-1)* size} , ${size}`;
    conn.query(sqlStr, (err, results) => {
        if (err)
            return res.json({ err_code: 0, message: '数据请求失败' })
        else
            {
                let newResults = []
                results.forEach((ele,index) => {
                    ele.babels =  ele.babels.split(',')
                    newResults.push(ele)
                });
                // console.log(results);
                res.json({ success_code: 200, message: newResults })
            }
    })
});

/**
* 获取推荐商品列表拼单用户
*/
router.get('/api/recommenduser', (req, res) => {
    setTimeout(function () {
        const data = require('../data/recommend_users');
        res.json({ success_code: 200, message: data })
    }, 10);
});

/**
* 获取搜索分类列表
*/
router.get('/api/searchgoods', (req, res) => {
    setTimeout(function () {
        const data = require('../data/search');
        res.json({ success_code: 200, message: data })
    }, 10);
});

module.exports = router;
