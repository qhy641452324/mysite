"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 注册路由
 */
const path = require("path");
const glob = require("glob");
//// app.use(router.routes(), router.allowedMethods())
function default_1(app) {
    let rlist = glob.sync('*', {
        cwd: path.join(__dirname, '../routes/')
    });
    rlist.forEach(function (v) {
        let router = require(path.join(__dirname, '../routes/') + v);
        app.use(router.allowedMethods());
        app.use(router.routes());
    });
}
exports.default = default_1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2R1bGVzL3JlZ3JvdXRlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0dBRUc7QUFDSCxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDNUIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBRTVCLHNEQUFzRDtBQUN0RCxtQkFBeUIsR0FBTztJQUM1QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUN2QixHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsWUFBWSxDQUFDO0tBQzFDLENBQUMsQ0FBQTtJQUVGLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBUyxDQUFLO1FBQ3hCLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3RCxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFBO1FBQ2hDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7SUFFNUIsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDO0FBWEQsNEJBV0MifQ==