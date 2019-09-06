const express = require('express');

const Router = express.Router();
const {
    find
} = require('../db/mongo');
const{
    formatData
} = require('../utils');
Router.post ('/',async(req,res)=>{
    let data = await find('cart',);
    res.send(formatData({data}))
})
module.exports  = Router;