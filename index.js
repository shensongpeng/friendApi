//引入Express框架及相关工具
import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';

//加载ORM服务
import sequelize from './data_model/data-base';

//引入数据服务模块
import register from './data_servers/register';
import login from './data_servers/login';
import createUser from './data_servers/createUser';
import updateUser from './data_servers/updateUser';
import changePassword from './data_servers/changePassword';
import getUser from './data_servers/getUser';
import postMessage from './data_servers/postMessage';
import findUser from './data_servers/findUser';
import follow from './data_servers/follow';
//后台数据模块
import addSchool from './data_servers/addSchool';
import addTeachBuild from './data_servers/addTeachBuild';
import addAdmin from './data_servers/addAdmin';
import addClassrom from './data_servers/addClassrom';
import addSeat from './data_servers/addSeat';
import addManySeat from './data_servers/addManySeat';
import testfindall from './data_servers/test';





//测试数据模块
import testPostMessage from './data_servers/testTransaction';
import testAddAdmin from './data_servers/testAdmin';

//加载mysql
import mysql  from 'mysql2';

//通过Express框架创建一个ExpressApp对象
const app = express();

//支持跨域请求
app.all('/api',(req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//添加静态文件服务器
//使用express自带的static中间件，对source目录提供静态文件服务
app.use('/resource',express.static('./resource'));

//解析JSON数据表单
app.use(bodyParser.json())
//解析表单文件
app.use(multer().any());

//配置请求路由
app.post('/api/register',register);
app.post('/api/login',login);
app.post('/api/createUser',createUser);
app.post('/api/updateUser',updateUser);
app.post('/api/changePassword',changePassword);
app.post('/api/getUser',getUser);
app.post('/api/postMessage',postMessage);
app.post('/api/findUser',findUser);
app.post('/api/follow',follow);

//配置后台数据请求路由
app.post('/api/addTeachBuild',addTeachBuild);
app.post('/api/addSchool',addSchool);
app.post('/api/addAdmin',addAdmin);
app.post('/api/addClassrom',addClassrom);
app.post('/api/addSeat',addSeat);
app.post('/api/addManySeat',addManySeat);



//配置测试请求路由
app.post('/api/testPostMessage',testPostMessage);
app.post('/api/testAddAdmin',testAddAdmin);
app.post('/api/testfindall',testfindall);




app.get('/api/test',(req,res)=>{
        res.json({
            results
        })
})


//开启监听服务
// const server = app.listen(9010,'60.205.141.116',()=>{
//   console.log('开启成功，访问http://60.205.141.116:9010');
// });
const server = app.listen(9010,()=>{
  console.log('开启成功666，访问http://60.205.141.116:9010');
});
