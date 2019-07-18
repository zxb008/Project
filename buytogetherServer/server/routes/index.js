const express = require('express');
const router = express.Router();
const conn = require('../db/db');
const svgCaptcha = require('svg-captcha');
const sms_util = require('./../util/sms_util');
// const md5 = require('blueimp-md5');//把数据加密以后再存入数据库


let users = {}; // 用户信息

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: '这是一个用express框架搭建的拼多多服务器' });
});

//向数据库中批量插入数据

// //1.得到一个数据的数组，数组中的元素是商品对象，保存每个商品的信息
// let recommendShoplistArr = require('../data/recommendshoplist').data;
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
        const data = require('../data/homeshoplist');
        res.json({ success_code: 200, message: data })
    }, 300);
});

/**
* 获取推荐商品列表
*/
router.get('/api/recommendshoplist', (req, res) => {

    // setTimeout(function () {
    //     const data = require('../data/recommendshoplist');
    //     res.json({ success_code: 200, message: data })
    // }, 10);
    let startIndex = req.query.startIndex || 1;
    let size = req.query.size || 20;

    let sqlStr = `select * from recommendshoplist limit ${(startIndex - 1) * size} , ${size}`;
    conn.query(sqlStr, (err, results) => {
        if (err)
            res.json({ err_code: 0, message: '数据请求失败' })
        else {
            let newResults = []
            results.forEach((ele, index) => {
                ele.babels = ele.babels.split(',')
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


/*
 一次性图形验证码
*/
// router.get('/api/captcha', (req, res) => {
//     // 1. 生成随机验证码
//     let captcha = svgCaptcha.create({
//         color: true,
//         noise: 3,
//         ignoreChars: '0o1i',
//         size: 4
//     });
//     // console.log(captcha.text);

//     // 2. 保存,session的作用是保存会话
//     req.session.captcha = captcha.text.toLocaleLowerCase();
//     console.log(req.session);

//     // 3. 返回客户端
//     res.type('svg');
//     res.send(captcha.data);
// });






// 发送短信验证码
router.get('/api/sendcode', (req, res) => {
    //得到电话号码
    let phone = req.query.phone;
    //调用sms_util里面的的方法随机生成6位短信验证码
    let code = sms_util.randomCode(6);

    //调用sms_util里面的的方法发送短信
    // sms_util.sendCode(phone, code, function (success) {
    //    if (success) {
    //     //短信发送成功
    //     res.json({ success_code: 200, message: '验证码获取成功' })
    //    } else {
    //     //短信发送失败
    //      res.json({ err_code: 0, message: '验证码获取失败' })
    //    }
    // })

    //由于这种短信发送是要收费的，所以我们在这里模拟
    //1.成功，这里我们设置发送一定是成功的

    //这一步的作用当不同的客户端发出验证码请求的时候，在user对象中存入多对的：phone=>code,从而当用户点击登录的时候进行验证
    //虽然session也可以为每个客户端保存各自的信息，但是这里不保存在session的原因是：session具有时效性
    setTimeout(() => {
        users[phone] = code;
        res.json({ success_code: 200, message: code })
    }, 2000);
    //2.失败
    // res.json({ err_code: 0, message: '验证码获取失败' })
});



/*
  手机验证码登录
*/
router.post('/api/logincode', (req, res) => {
    // 1. 获取数据
    const phone = req.body.phone;
    const code = req.body.code;
    //打印
    console.log(phone, users[phone], code);
    // 2. 验证验证码是否正确
    if (users[phone] !== code) {
        res.json({ err_code: 0, message: '验证码不正确!' });
    } else {
        // 3. 查询数据
        delete users[phone];

        let sqlStr = `SELECT * FROM users WHERE user_phone =${phone} LIMIT 1 `;

        conn.query(sqlStr, (error, results, fields) => {
            if (error) {
                res.json({ err_code: 0, message: '请求数据失败' });
            } else {
                // console.log(results);
                results = JSON.parse(JSON.stringify(results));
                // console.log(results);

                if (results[0]) {  // 用户已经存在
                    // 这里是为了下面/api/autologingetuser自动接口中根据session中的用户id获取用户信息
                    req.session.userId = results[0].id;
                    // console.log(req.session.userId);
                    // 返回数据给客户端
                    res.json({
                        success_code: 200,
                        message: { 
                            id: results[0].id,
                            user_name: results[0].user_name,
                            user_phone: results[0].user_phone,
                            user_img: results[0].user_img,
                            user_sex: results[0].user_sex,
                            user_birthday: results[0].user_birthday,
                            user_address: results[0].user_address,
                            user_sign: results[0].user_sign,
                         }
                    });
                } else { // 新用户
                    //这里需要注意在建用户表的时候，user_name，user_phone的类型要设置为varchar类型，因为客户端传过来的phone的类型是字符串类型
                    const addSql = "INSERT INTO users(`user_name`, `user_phone`, `user_img`, `user_sex`, `user_birthday`, `user_address`, `user_sign`) VALUES (?,?,?,?,?,?,?)";

                    conn.query(addSql, [phone, phone, '', '未填写', '未填写', '未填写', '未填写'], (error, results, fields) => {
                        results = JSON.parse(JSON.stringify(results));//插入成功以后，返回数据，其中有新插入数据的id值

                        if (!error) {
                            // 这里是为了下面/api/autologingetuser自动接口中根据session中的用户id获取用户信息
                            req.session.userId = results.insertId;
                            let sqlStr = "SELECT * FROM users WHERE id = '" + results.insertId + "' LIMIT 1";
                            conn.query(sqlStr, (error, results, fields) => {
                                if (error) {
                                    res.json({ err_code: 0, message: '请求数据失败' });
                                } else {
                                    results = JSON.parse(JSON.stringify(results));
                                    // 返回数据给客户端
                                    res.json({
                                        success_code: 200,
                                        message: {
                                            id: results[0].id,
                                            user_name: results[0].user_name,
                                            user_phone: results[0].user_phone,
                                            user_img: results[0].user_img,
                                            user_sex: results[0].user_sex,
                                            user_birthday: results[0].user_birthday,
                                            user_address: results[0].user_address,
                                            user_sign: results[0].user_sign
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            }
        });
    }

});






/**
 * 用户名和密码登录
 */
// router.post('/api/login_pwd', (req, res) => {
//     // 1. 获取数据
//     const user_name = req.body.name;
//     const user_pwd = md5(req.body.pwd);
//     const captcha = req.body.captcha.toLowerCase();

//     // console.log(captcha, req.session.captcha, req.session);

//     // 2. 验证图形验证码是否正确
//     if (captcha !== req.session.captcha) {
//         res.json({ err_code: 0, message: '图形验证码不正确!' });
//         return;
//     } else {
//         delete req.session.captcha;


//         // 3. 查询数据
//         let sqlStr = "SELECT * FROM pdd_user_info WHERE user_name = '" + user_name + "' LIMIT 1";
//         conn.query(sqlStr, (error, results, fields) => {
//             if (error) {
//                 res.json({ err_code: 0, message: '用户名不正确!' });
//             } else {
//                 results = JSON.parse(JSON.stringify(results));
//                 if (results[0]) {  // 用户已经存在
//                     // 验证密码是否正确
//                     if (results[0].user_pwd !== user_pwd) {
//                         res.json({ err_code: 0, message: '密码不正确!' });
//                     } else {
//                         req.session.userId = results[0].id;
//                         // 返回数据给客户端
//                         res.json({
//                             success_code: 200,
//                             message: { id: results[0].id, user_name: results[0].user_name, user_phone: results[0].user_phone },
//                             info: '登录成功!'
//                         });
//                     }
//                 } else { // 新用户
//                     const addSql = "INSERT INTO pdd_user_info(user_name, user_pwd) VALUES (?, ?)";
//                     const addSqlParams = [user_name, user_pwd];
//                     conn.query(addSql, addSqlParams, (error, results, fields) => {
//                         results = JSON.parse(JSON.stringify(results));
//                         // console.log(results);
//                         if (!error) {
//                             req.session.userId = results.insertId;
//                             let sqlStr = "SELECT * FROM pdd_user_info WHERE id = '" + results.insertId + "' LIMIT 1";
//                             conn.query(sqlStr, (error, results, fields) => {
//                                 if (error) {
//                                     res.json({ err_code: 0, message: '请求数据失败' });
//                                 } else {
//                                     results = JSON.parse(JSON.stringify(results));
//                                     // 返回数据给客户端
//                                     res.json({
//                                         success_code: 200,
//                                         message: { id: results[0].id, user_name: results[0].user_name, user_phone: results[0].user_phone }
//                                     });
//                                 }
//                             });
//                         }
//                     });
//                 }
//             }
//             console.log(req.session);
//         });
//     }
// });



/*
   这个接口应该在app.vue中调用
*  根据前面登录已经保存的在session中的用户id获取用户信息，来实现自动登录
* */
router.get('/api/autologingetuser', (req, res) => {
    // 1.0 获取参数
    //之前没有登录或者session已经过期，那么得不到userId
    //之前有登录同时session没有过期，可以得到userId
    let userId = req.session.userId;
    // console.log(userId);
    // 1.1 数据库查询的语句
    let sqlStr = "SELECT * FROM users WHERE id = '" + userId + "' LIMIT 1";
    conn.query(sqlStr, (error, results, fields) => {
        if (error) {
            res.json({ err_code: 0, message: '请求数据失败' });
        } else {
            results = JSON.parse(JSON.stringify(results));

            if (!results[0]) {
                //之前没有登录或者session已经过期，那么是找不到用户信息
                delete req.session.userId;//注意这里
                res.json({ error_code: 0, message: '请先登录' });
            } else {
                //这里可以再次在session中保存用户id,这样防止登录了但session过期，造成不能自动登录，
                //但是一般不这样，因为这样增加了消耗
            // req.session.userId = results[0].id;
                // 返回数据给客户端
                res.json({
                    success_code: 200,
                    message: {
                        id: results[0].id,
                        user_name: results[0].user_name,
                        user_phone: results[0].user_phone,
                        user_img: results[0].user_img,
                        user_sex: results[0].user_sex,
                        user_birthday: results[0].user_birthday,
                        user_address: results[0].user_address,
                        user_sign: results[0].user_sign
                    }
                });
            }
        }
    });
});

//用户退出登录，应该清除session里面的用户id，防止页面刷新时候，调用上面的自动接口，实现自动登录
router.get('/api/logout', (req, res) => {

    // 1.清除session中的userid
    delete req.session.userId;
    // 2. 返回客户端
    res.json({
        success_code: 200,
        message: '退出登录成功'
    });
});


//修改用户信息
router.post('/api/resetuserimg', (req, res) => {
    // 1. 获取数据
    const img = req.body.user_img;

});
router.post('/api/resetusername', (req, res) => {
    // 1. 获取数据
    const id = req.session.userId;
    const name = req.body.user_name;
    const sqlStr =  'update users set user_name=? where id=?'
   
    conn.query(sqlStr, [name,id], (error, results, fields) => {
        if (error) {
            res.json({
                success_code: 0,
                message: '更新失败'
            });
        } else {
            setTimeout(()=>{
                res.json({
                    success_code: 200,
                    message: '更新成功'
                });
            },1000)
        }
    });
});
router.post('/api/resetusersex', (req, res) => {
    // 1. 获取数据
    const id = req.session.userId;
    const sex = req.body.user_sex;
    const sqlStr =  'update users set user_sex=? where id=?'
   
    conn.query(sqlStr, [sex,id], (error, results, fields) => {
        if (error) {
            res.json({
                success_code: 0,
                message: '更新失败'
            });
        } else {
            setTimeout(()=>{
                res.json({
                    success_code: 200,
                    message: '更新成功'
                });
            },1000)
        }
    });
});
router.post('/api/resetuseraddress', (req, res) => {
    // 1. 获取数据
    const id = req.session.userId;
    const address = req.body.user_address;
    const sqlStr =  'update users set user_address=? where id=?'
   
    conn.query(sqlStr, [address,id], (error, results, fields) => {
        if (error) {
            res.json({
                success_code: 0,
                message: '更新失败'
            });
        } else {
            setTimeout(()=>{
                res.json({
                    success_code: 200,
                    message: '更新成功'
                });
            },1000)
        }
    });
});
router.post('/api/resetuserbirthday', (req, res) => {
    // 1. 获取数据
    const id = req.session.userId;
    const birthday = req.body.user_birthday;
    const sqlStr =  'update users set user_birthday=? where id=?'
   
    conn.query(sqlStr, [birthday,id], (error, results, fields) => {
        if (error) {
            res.json({
                success_code: 0,
                message: '更新失败'
            });
        } else {
            setTimeout(()=>{
                res.json({
                    success_code: 200,
                    message: '更新成功'
                });
            },1000)
        }
    });
});
router.post('/api/resetusersign', (req, res) => {
    // 1. 获取数据
    const id = req.session.userId;
    const sign = req.body.user_sign;
    const sqlStr =  'update users set user_sign=? where id=?'
   
    conn.query(sqlStr, [sign,id], (error, results, fields) => {
        if (error) {
            res.json({
                success_code: 0,
                message: '更新失败'
            });
        } else {
            setTimeout(()=>{
                res.json({
                    success_code: 200,
                    message: '更新成功'
                });
            },1000)
        }
    });
});
module.exports = router;
