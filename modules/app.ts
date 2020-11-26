require('source-map-support').install();
import Koa from 'koa';
import koastatic from "koa-static";
const views = require('koa-views')
const path = require('path')

var koaBody = require('koa-body');
import reg_route from "./regroute"
import render from "./koaejs"

const app = new Koa();
 
app.use(koaBody({ multipart: true }));
// app.use(koastatic('/static/css'))
//静态资源配置 
app.use(require('koa-static')('static'))

var bodyParser = require('koa-bodyparser');
app.use(bodyParser({
    formLimit: '10000kb'
}))

// 加载模板引擎
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))

render(app, {
    root: 'views',
    layout: 'shared/layout',
    viewExt: 'ejs',
    cache: process.env.NODE_ENV == 'production' ? true : false,
    debug: false
});

//静态文件
if (process.env.NODE_ENV == 'production') {
    app.use(require('koa-static')('public', { maxAge: 2 * 60 * 1000 }))
}
else {
    app.use(require('koa-static')('public'))
}


// const redis = require('redis');
// var RDS_PORT = 6379,        //端口号
//     RDS_HOST = '******',    //服务器IP
//     RDS_PWD = '8888',    //密码    
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
reg_route(app); 

app.listen(3009,function(){
    console.log(`本地启动：http://localhost:3009/index`)
})

