/**
 * 注册路由
 */
const path = require("path")
const glob = require("glob")

//// app.use(router.routes(), router.allowedMethods())
export default function (app:any) {
    let rlist = glob.sync('*', {
        cwd: path.join(__dirname, '../routes/')
    })

    rlist.forEach(function(v:any){
        let router = require(path.join(__dirname, '../routes/') + v);
        app.use(router.allowedMethods())
        app.use(router.routes())

    })
}