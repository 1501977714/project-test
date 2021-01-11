const express = require('express');
const request = require('request');
const BooksModel = require(__dirname + '/../Model/BooksModel');
const wxConfig = require(__dirname + '/../Config/wx.config')
const router = express.Router();

// 获取书本列表信息
router.get('/', (req, res) => {
    let booksModel = new BooksModel();
    let page = req.query.page ? req.query.page : 1;
    booksModel.getBooksList(page, (ob) => {
        res.json(ob);
    });
});

router.get('/bookinfo', (req, res) => {
    let booksModel = new BooksModel();
    let bid = req.query.bid;
    booksModel.getBooksInfo(bid, (ob) => {
        res.json(ob);
    });
});

router.get('/', (req, res) => {
    let code = req.query.code;
    let urla = `https:/ /api.weixin.qq.com/sns/jscode2session?appid=${wxConfig.appid}&secret=${wxConfig.appsecret}&js_code=JSCODE&grant_type=authorization_code`;
    request(urla, (error, response, body)=>{
        if(error){
            console.log(error);
            res.json({code: -1,msg:"授权失败"});
            return ;
        }
        console.log(body);
        res.json(JSON.parse(body));
    })

});

module.exports = router;