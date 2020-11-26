const Router = require('koa-router');
const router = new Router();

const mySqliteDB = require('../../sqlite/index')
const mySqliteCodes = require('../../sqlite/codeInfo');
const myCodesController = require('../../controller/codes');
const userController = require('../../controller/user');
// const chatModule = require('../chat');
import chatModule from "../chat";

//sqlite连接测试
mySqliteDB.authenticate().then(() => {
    console.log('sqlite连接测试: successfully.');
}).catch((err:any) => {
    console.error('Unable to connect to the database:', err);
});

// 定义接口
router.post('/setCode', myCodesController.createNewInfo);
router.get('/getCode/:id', myCodesController.getCodeInfo);

router.get('/getUser/:id', userController.getUserInfo);
router.post('/setUser', userController.insertUser);


// &传参形式
router.get('/chatInfo', async (ctx:any, next:any) => {
    var key = ctx.request.query.key;//&传参
    try {
        var back = await chatModule.getChatBack(key);
        ctx.body = { 
            re: true,
            message: '',
            backInfo: back
        };
    } catch (error) {
        ctx.body = {
            re: false,
            message: error.message,
            backInfo: null
        }
    }

})

module.exports = router;