const mysql = require('mysql');
class DbBase{
    constructor(){
        this.mydb = mysql.createConnection(require(__dirname+'/../Config/db.config'));
        this.mydb.connect();
    }

    end(){
        this.mydb.end();
    }
}

module.exports = DbBase;