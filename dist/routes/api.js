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
    console.log('sqlite连接测试: successfully.');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbW9kdWxlcy9yb3V0ZXMvYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3JDLE1BQU0sTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUE7QUFDaEQsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDdkQsTUFBTSxpQkFBaUIsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUM1RCxNQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUN4RCx5Q0FBeUM7QUFDekMsbURBQWlDO0FBRWpDLFlBQVk7QUFDWixVQUFVLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtJQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBTyxFQUFFLEVBQUU7SUFDakIsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUM3RCxDQUFDLENBQUMsQ0FBQztBQUVILE9BQU87QUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUN6RCxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUUxRCxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBR25ELFFBQVE7QUFDUixNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsR0FBTyxFQUFFLElBQVEsRUFBRSxFQUFFO0lBQ2hELElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBLEtBQUs7SUFDckMsSUFBSTtRQUNBLElBQUksSUFBSSxHQUFHLE1BQU0sY0FBVSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QyxHQUFHLENBQUMsSUFBSSxHQUFHO1lBQ1AsRUFBRSxFQUFFLElBQUk7WUFDUixPQUFPLEVBQUUsRUFBRTtZQUNYLFFBQVEsRUFBRSxJQUFJO1NBQ2pCLENBQUM7S0FDTDtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ1osR0FBRyxDQUFDLElBQUksR0FBRztZQUNQLEVBQUUsRUFBRSxLQUFLO1lBQ1QsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLFFBQVEsRUFBRSxJQUFJO1NBQ2pCLENBQUE7S0FDSjtBQUVMLENBQUMsQ0FBQyxDQUFBO0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMifQ==