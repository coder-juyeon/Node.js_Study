// const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// 미들웨어 등록
app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

// app.js 서버를 구동하는 역할
// 불러오기와 내보내기를 통해 routes.js파일로 연결
// 외부에서 읽을 수 있는 내용만 내보내기 가능

// const server = http.createServer(app);
// server.listen(3000);
// 두개를 더 짧게 가능
app.listen(3000);