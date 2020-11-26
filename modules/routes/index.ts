const Router = require('koa-router');
const router = new Router();

// const treelist = require("../jsondata/tree.json");
//@ts-ignore
import treelist from "../jsondata/tree.json";
const apidata = require("../apidata")


router.get('/', async (ctx:any) => {
  let title = '首页',id="";
  let hotinfos = await apidata.hotarticles();
  let hotnews = await apidata.hotnews();
  // console.log(hotnews.T1467284926140)
  await ctx.render('index', {
    title,id,
    treelist: treelist,
    hotarticles: hotinfos.data,
    hotnews: hotnews.T1467284926140
  })
}) 

router.get('/my', async (ctx:any) => {
  let title = '我的', id = "";
  await ctx.render('/sections/my', {
    layout:"", 
    title, id,
    treelist: treelist
  })
}) 

//表单提交测试
router.get('/committest', async (ctx:any) => {
  let title = '提交', id = "";
  await ctx.render('committest', {
    title, id
  })
})

router.get('/share', async (ctx:any) => {
  let title = '分享', id = "";
  let hotinfos = await apidata.hotarticles();
  await ctx.render('/codes', {
    title, id,
    treelist: treelist,
    hotarticles: hotinfos.data
  })
})

router.get('/chat', async (ctx:any) => {
  let title = 'chat', id = "";
  let hotinfos = await apidata.hotarticles();
  await ctx.render('chatindex', {
    title, id,
    treelist: treelist,
    hotarticles: hotinfos.data,
  })
})

router.get('/codes/:id', async (ctx:any) => {
    let title = '查询明细'
    let id = ctx.params.id;
  let hotinfos = await apidata.hotarticles();
    await ctx.render('/codes', {
      id, title,
      layout:"shared/layout_search",
      treelist: treelist,
      hotarticles: hotinfos.data,
    })
})




module.exports = router;