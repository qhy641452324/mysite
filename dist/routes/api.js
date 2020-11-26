"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require('koa-router');
const router = new Router();
const mySqliteDB = require('../../sqlite/index');
const mySqliteCodes = require('../../sqlite/codeInfo');
const myCodesController = require('../../controller/codes');
const userController = require('../../controller/user');
// const chatModule = require('../chat');
const chat_1 = __importDefault(require("../chat"));
//sqlite连接测试
mySqliteDB.authenticate().then(() => {
    console.log('successfully.');
}).catch((err) => {
    console.error('Unable to connect to the database:', err);
});
// 定义接口
router.post('/setCode', myCodesController.createNewInfo);
router.get('/getCode/:id', myCodesController.getCodeInfo);
router.get('/getUser/:id', userController.getUserInfo);
router.post('/setUser', userController.insertUser);
// &传参形式
router.get('/chatInfo', async (ctx, next) => {
    var key = ctx.request.query.key; //&传参
    try {
        var back = await chat_1.default.getChatBack(key);
        ctx.body = {
            re: true,
            message: '',
            backInfo: back
        };
    }
    catch (error) {
        ctx.body = {
            re: false,
            message: error.message,
            backInfo: null
        };
    }
});
module.exports = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbW9kdWxlcy9yb3V0ZXMvYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3JDLE1BQU0sTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUE7QUFDaEQsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDdkQsTUFBTSxpQkFBaUIsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUM1RCxNQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUN4RCx5Q0FBeUM7QUFDekMsbURBQWlDO0FBRWpDLFlBQVk7QUFDWixVQUFVLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtJQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ2pDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQU8sRUFBRSxFQUFFO0lBQ2pCLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0NBQW9DLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDN0QsQ0FBQyxDQUFDLENBQUM7QUFFSCxPQUFPO0FBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDekQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7QUFFMUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3ZELE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUduRCxRQUFRO0FBQ1IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLEdBQU8sRUFBRSxJQUFRLEVBQUUsRUFBRTtJQUNoRCxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQSxLQUFLO0lBQ3JDLElBQUk7UUFDQSxJQUFJLElBQUksR0FBRyxNQUFNLGNBQVUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0MsR0FBRyxDQUFDLElBQUksR0FBRztZQUNQLEVBQUUsRUFBRSxJQUFJO1lBQ1IsT0FBTyxFQUFFLEVBQUU7WUFDWCxRQUFRLEVBQUUsSUFBSTtTQUNqQixDQUFDO0tBQ0w7SUFBQyxPQUFPLEtBQUssRUFBRTtRQUNaLEdBQUcsQ0FBQyxJQUFJLEdBQUc7WUFDUCxFQUFFLEVBQUUsS0FBSztZQUNULE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixRQUFRLEVBQUUsSUFBSTtTQUNqQixDQUFBO0tBQ0o7QUFFTCxDQUFDLENBQUMsQ0FBQTtBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDIn0=