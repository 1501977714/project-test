const mysql = require('mysql');
const DbBase = require('./DbBase');
class BooksModel extends DbBase{
    
    getBooksList(page,cb){
        let pagenum = 20;
        let start = (page-1)*pagenum;
        let sql = 'SELECT bid, title, author, imgs FROM books WHERE status=1 LIMIT ?, ?';
        this.mydb.query(sql, [start, pagenum],(err, results)=>{
            let ob = {code:1, bookslist:[]};
            if(err){
                ob.code = -1;
                console.log(err);
            }else{
                ob.bookslist = results;
            }
            cb(ob);
        });
    }

    getBooksInfo(bid, cb){
        let sql = 'SELECT * FROM books WHERE status=1 AND bid = ?';
        this.mydb.query(sql, [bid], (err, results)=>{
            let ob = {code:1, bookinfo:[]};
            if(err){
                ob.code = -1;
                console.log(err);
            }else{
                ob.bookinfo = results[0];
            }
            cb(ob);
        });
    }

    

    
}

module.exports = BooksModel;
