const express = require('express');
const BooksModel = require(__dirname + '/../Model/BooksModel');
const router = express.Router();

// 获取书本列表信息
router.get('/', (req, res) => {
    let booksModel = new BooksModel();
    let page = req.query.page ? req.query.page : 1;
    booksModel.getBooksList(page, (ob)=>{
        res.json(ob);
    });
});

router.get('/bookinfo', (req, res) => {
    let booksModel = new BooksModel();
    let bid = req.query.bid;
    booksModel.getBooksInfo(bid, (ob)=>{
        res.json(ob);
    });
});



module.exports = router;