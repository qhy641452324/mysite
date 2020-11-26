
// jiekou https://blog.csdn.net/github_37360787/article/details/79529021
const axios = require("axios");

module.exports = {
    //热门文章 //Article
    hotarticles:async function(){
        var res = await axios.get("https://gank.io/api/v2/hot/likes/category/Article/count/5");
        return res.data;
    },
    //精选新闻
    hotnews:async function(){
        var res = await axios.get("http://c.3g.163.com/nc/article/list/T1467284926140/0-20.html");
        return res.data;
    }
}