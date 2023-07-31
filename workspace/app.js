// const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// 미들웨어 등록
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

// app.js 서버를 구동하는 역할
// 불러오기와 내보내기를 통해 routes.js파일로 연결
// 외부에서 읽을 수 있는 내용만 내보내기 가능

// const server = http.createServer(app);
// server.listen(3000);
// 두개를 더 짧게 가능

// 404페이지 만들기
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not Found</h1>')
})

app.listen(3000);