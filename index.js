const express = require('express');
const  bodyParser = require('body-parser');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});
// 接收post过来的数据
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// 启用子路由
app.use('/concat', require('./Controller/ConcatController'));
app.use('/books', require('./Controller/BooksController'));
app.use('/users', require('./Controller/UserController'));

app.listen(81, () => {
    console.log('Example app listening on port 81!');
});
