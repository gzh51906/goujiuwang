const express = require('express');

const Router = express.Router();
const {
    insert,
    find
} = require('../db/mongo');
const {
    formatData
} = require('../utils')
// const goodsRouter = require('./goods');

// Router.use('/goods', goodsRouter);
// 查找
Router.get('/', async (req, res) => {
    // console.log('++++', req.query);
    let {
        skip,
        limit,
        sort
    } = req.query;
    let data = await find('sort', {}, {
        skip,
        limit,
        sort
    });
    res.send(formatData({
        data
    }))
})
// 查询指定的商品
Router.get('/goods', async (req, res) => {
    // console.log('----', req.query);
    let {
        id
    } = req.query;

    let data = await find('datalist', {
        name: id
    });
    // res.send('res')
    res.send(formatData({
        data
    }))
})
// 查询指定的商品
Router.get('/item', async (req, res) => {
    // console.log('----', req.query);
    let {
        id
    } = req.query;
    let data = await find('iemtlist', {
        ID: id * 1
    });
    // res.send('res')
    res.send(formatData({
        data
    }))
})

// 增：注册用户(应该实现加入到购物车)
Router.post('/reg', async (req, res) => {
    let {
        phone,
        password
    } = req.body;
    try {
        insert('user', {
            phone,
            password
        });
        res.send(formatData())
    } catch (err) {
        res.send(formatData({
            code: 0
        }))
    }
})
module.exports = Router;