"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('source-map-support').install();
const koa_1 = __importDefault(require("koa"));
const views = require('koa-views');
const path = require('path');
var koaBody = require('koa-body');
const regroute_1 = __importDefault(require("./regroute"));
const koaejs_1 = __importDefault(require("./koaejs"));
const app = new koa_1.default();
app.use(koaBody({ multipart: true }));
// app.use(koastatic('/static/css'))
//静态资源配置 
app.use(require('koa-static')('static'));
var bodyParser = require('koa-bodyparser');
app.use(bodyParser({
    formLimit: '10000kb'
}));
// 加载模板引擎
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}));
koaejs_1.default(app, {
    root: 'views',
    layout: 'shared/layout',
    viewExt: 'ejs',
    cache: process.env.NODE_ENV == 'production' ? true : false,
    debug: false
});
//静态文件
if (process.env.NODE_ENV == 'production') {
    app.use(require('koa-static')('public', { maxAge: 2 * 60 * 1000 }));
}
else {
    app.use(require('koa-static')('public'));
}
// const redis = require('redis');
// var RDS_PORT = 6379,        //端口号
//     RDS_HOST = '94.191.16.51',    //服务器IP
//     RDS_PWD = 'qhy641452324',    //密码    
//     RDS_OPTS = {},            //设置项
//     client = redis.createClient(RDS_PORT, RDS_HOST, RDS_OPTS);
// client.auth(RDS_PWD, function () {
//     console.log('通过认证');
// });
// client.on('connect', function () {
//     // client.set('testkey', 'this is a test !!!', redis.print);
//     // client.get('testkey', redis.print);
//     var obj = {
//         name: ' test1',
//         index: 223,
//         str:`{"aid":"5A1CEF7D86F1488E9BA2D21D1BADD558", "static_page":"false", "queryparams":"?locale=zh-cn&dsp=0&sp=%E7%99%BE%E5%BA%A6", "apptype":"edgeChromium", "cbid":"1", "pagetype":"ntp", "configRootUrl":"https://assets.msn.com/config/v1/", "configIndexDocId":"cms/api/amp/experienceConfigIndex/BBViXsS", "feedBaseDomain":"", "deviceFormFactor":"desktop", "pageGenTime":"2020-11-19T06:04:57Z", "pcsInfo":{"v":"20201111.8_master", "env":"prod"}, "featureFlags":{ "wpoEnabled": "true" }, "market":{}, "locale":{"language":"zh", "script":"", "market":"cn"}, "servicesEndpoints":{"staticConfig": {"domain": "https://assets.msn.cn", "path": "/config/v3/", "v": ""},"crs": {"domain": "", "path": "/resolver/api/resolve/", "v": "v3"},"feedService": {"domain": "https://assets.msn.cn", "path": "", "v": ""},"enterpriseFeedService": {"domain": "https://ent-api.msn.com/", "path": "", "v": ""}}, "bundleInfo":{"v":"20201116.222", "alias":"latest", "hash":"", "configsHash":"", "locConfigsHash":""}, "os":"windows", "browser":{"browserType":"edgeChromium", "version":"86", "ismobile":"false"}, "domain":"ntp.msn.cn", "geo_country":"CN", "geo_countryname":"China", "geo_subdivision":"Shanghai", "geo_zip":"200000", "geo_city":"Shanghai", "geo_lat":"31.2304", "geo_long":"121.474"}`
//     }
//     client.hmset("list", obj);
//     client.hgetall("list", function (err, items) {
//         console.log(err, items.name);
//     });
//     console.log('connect');
// });
// app.use(router.routes(), router.allowedMethods())
//注册路由
regroute_1.default(app);
app.listen(3009, function () {
    console.log(`本地启动：http://localhost:3009/index`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbW9kdWxlcy9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN4Qyw4Q0FBc0I7QUFFdEIsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0FBQ2xDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUU1QixJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbEMsMERBQWtDO0FBQ2xDLHNEQUE2QjtBQUU3QixNQUFNLEdBQUcsR0FBRyxJQUFJLGFBQUcsRUFBRSxDQUFDO0FBRXRCLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN0QyxvQ0FBb0M7QUFDcEMsU0FBUztBQUNULEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7QUFFeEMsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDM0MsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFDZixTQUFTLEVBQUUsU0FBUztDQUN2QixDQUFDLENBQUMsQ0FBQTtBQUVILFNBQVM7QUFDVCxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsRUFBRTtJQUMzQyxTQUFTLEVBQUUsS0FBSztDQUNuQixDQUFDLENBQUMsQ0FBQTtBQUVILGdCQUFNLENBQUMsR0FBRyxFQUFFO0lBQ1IsSUFBSSxFQUFFLE9BQU87SUFDYixNQUFNLEVBQUUsZUFBZTtJQUN2QixPQUFPLEVBQUUsS0FBSztJQUNkLEtBQUssRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSztJQUMxRCxLQUFLLEVBQUUsS0FBSztDQUNmLENBQUMsQ0FBQztBQUVILE1BQU07QUFDTixJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLFlBQVksRUFBRTtJQUN0QyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUE7Q0FDdEU7S0FDSTtJQUNELEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7Q0FDM0M7QUFHRCxrQ0FBa0M7QUFDbEMsb0NBQW9DO0FBQ3BDLDRDQUE0QztBQUM1Qyw0Q0FBNEM7QUFDNUMsc0NBQXNDO0FBQ3RDLGlFQUFpRTtBQUVqRSxxQ0FBcUM7QUFDckMsMkJBQTJCO0FBQzNCLE1BQU07QUFFTixxQ0FBcUM7QUFDckMsbUVBQW1FO0FBQ25FLDZDQUE2QztBQUU3QyxrQkFBa0I7QUFDbEIsMEJBQTBCO0FBQzFCLHNCQUFzQjtBQUN0Qiw4dkNBQTh2QztBQUM5dkMsUUFBUTtBQUNSLGlDQUFpQztBQUNqQyxxREFBcUQ7QUFDckQsd0NBQXdDO0FBQ3hDLFVBQVU7QUFDViw4QkFBOEI7QUFDOUIsTUFBTTtBQUVOLG9EQUFvRDtBQUNwRCxNQUFNO0FBQ04sa0JBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUVmLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFDO0lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ25ELENBQUMsQ0FBQyxDQUFBIn0=