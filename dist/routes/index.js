"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require('koa-router');
const router = new Router();
// const treelist = require("../jsondata/tree.json");
//@ts-ignore
const tree_json_1 = __importDefault(require("../jsondata/tree.json"));
const apidata = require("../apidata");
router.get('/', async (ctx) => {
    let title = '首页', id = "";
    let hotinfos = await apidata.hotarticles();
    let hotnews = await apidata.hotnews();
    // console.log(hotnews.T1467284926140)
    await ctx.render('index', {
        title, id,
        treelist: tree_json_1.default,
        hotarticles: hotinfos.data,
        hotnews: hotnews.T1467284926140
    });
});
router.get('/my', async (ctx) => {
    let title = '我的', id = "";
    await ctx.render('/sections/my', {
        layout: "",
        title, id,
        treelist: tree_json_1.default
    });
});
//表单提交测试
router.get('/committest', async (ctx) => {
    let title = '提交', id = "";
    await ctx.render('committest', {
        title, id
    });
});
router.get('/share', async (ctx) => {
    let title = '分享', id = "";
    let hotinfos = await apidata.hotarticles();
    await ctx.render('/codes', {
        title, id,
        treelist: tree_json_1.default,
        hotarticles: hotinfos.data
    });
});
router.get('/chat', async (ctx) => {
    let title = 'chat', id = "";
    let hotinfos = await apidata.hotarticles();
    await ctx.render('chatindex', {
        title, id,
        treelist: tree_json_1.default,
        hotarticles: hotinfos.data,
    });
});
router.get('/codes/:id', async (ctx) => {
    let title = '查询明细';
    let id = ctx.params.id;
    let hotinfos = await apidata.hotarticles();
    await ctx.render('/codes', {
        id, title,
        layout: "shared/layout_search",
        treelist: tree_json_1.default,
        hotarticles: hotinfos.data,
    });
});
module.exports = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2R1bGVzL3JvdXRlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNyQyxNQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO0FBRTVCLHFEQUFxRDtBQUNyRCxZQUFZO0FBQ1osc0VBQTZDO0FBQzdDLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUdyQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBTyxFQUFFLEVBQUU7SUFDaEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxFQUFDLEVBQUUsR0FBQyxFQUFFLENBQUM7SUFDdkIsSUFBSSxRQUFRLEdBQUcsTUFBTSxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0MsSUFBSSxPQUFPLEdBQUcsTUFBTSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdEMsc0NBQXNDO0lBQ3RDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7UUFDeEIsS0FBSyxFQUFDLEVBQUU7UUFDUixRQUFRLEVBQUUsbUJBQVE7UUFDbEIsV0FBVyxFQUFFLFFBQVEsQ0FBQyxJQUFJO1FBQzFCLE9BQU8sRUFBRSxPQUFPLENBQUMsY0FBYztLQUNoQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQTtBQUVGLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFPLEVBQUUsRUFBRTtJQUNsQyxJQUFJLEtBQUssR0FBRyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUMxQixNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFO1FBQy9CLE1BQU0sRUFBQyxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7UUFDVCxRQUFRLEVBQUUsbUJBQVE7S0FDbkIsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLENBQUE7QUFFRixRQUFRO0FBQ1IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLEdBQU8sRUFBRSxFQUFFO0lBQzFDLElBQUksS0FBSyxHQUFHLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQzFCLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7UUFDN0IsS0FBSyxFQUFFLEVBQUU7S0FDVixDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQTtBQUVGLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxHQUFPLEVBQUUsRUFBRTtJQUNyQyxJQUFJLEtBQUssR0FBRyxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUMxQixJQUFJLFFBQVEsR0FBRyxNQUFNLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1FBQ3pCLEtBQUssRUFBRSxFQUFFO1FBQ1QsUUFBUSxFQUFFLG1CQUFRO1FBQ2xCLFdBQVcsRUFBRSxRQUFRLENBQUMsSUFBSTtLQUMzQixDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQTtBQUVGLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFPLEVBQUUsRUFBRTtJQUNwQyxJQUFJLEtBQUssR0FBRyxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUM1QixJQUFJLFFBQVEsR0FBRyxNQUFNLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO1FBQzVCLEtBQUssRUFBRSxFQUFFO1FBQ1QsUUFBUSxFQUFFLG1CQUFRO1FBQ2xCLFdBQVcsRUFBRSxRQUFRLENBQUMsSUFBSTtLQUMzQixDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQTtBQUVGLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxHQUFPLEVBQUUsRUFBRTtJQUN2QyxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUE7SUFDbEIsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDekIsSUFBSSxRQUFRLEdBQUcsTUFBTSxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekMsTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtRQUN6QixFQUFFLEVBQUUsS0FBSztRQUNULE1BQU0sRUFBQyxzQkFBc0I7UUFDN0IsUUFBUSxFQUFFLG1CQUFRO1FBQ2xCLFdBQVcsRUFBRSxRQUFRLENBQUMsSUFBSTtLQUMzQixDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQTtBQUtGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDIn0=