// 导入所需的模块和库
const express = require('express');
const bodyParser = require('body-parser');

// 创建Express应用程序
const app = express();
const port = 8080;

// 解析请求体中的JSON数据
app.use(bodyParser.json());

// 处理GET请求
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// 处理POST请求
app.post('/data', (req, res) => {
    const { name, age } = req.body;
    res.send(`Received data: ${name}, ${age}`);
});

// 启动服务器监听指定端口
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
