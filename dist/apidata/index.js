"use strict";
// jiekou https://blog.csdn.net/github_37360787/article/details/79529021
const axios = require("axios");
module.exports = {
    //热门文章 //Article
    hotarticles: async function () {
        var res = await axios.get("https://gank.io/api/v2/hot/likes/category/Article/count/5");
        return res.data;
    },
    //精选新闻
    hotnews: async function () {
        var res = await axios.get("http://c.3g.163.com/nc/article/list/T1467284926140/0-20.html");
        return res.data;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2R1bGVzL2FwaWRhdGEvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdFQUF3RTtBQUN4RSxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFL0IsTUFBTSxDQUFDLE9BQU8sR0FBRztJQUNiLGdCQUFnQjtJQUNoQixXQUFXLEVBQUMsS0FBSztRQUNiLElBQUksR0FBRyxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsQ0FBQywyREFBMkQsQ0FBQyxDQUFDO1FBQ3ZGLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQztJQUNwQixDQUFDO0lBQ0QsTUFBTTtJQUNOLE9BQU8sRUFBQyxLQUFLO1FBQ1QsSUFBSSxHQUFHLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLDhEQUE4RCxDQUFDLENBQUM7UUFDMUYsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBQ3BCLENBQUM7Q0FDSixDQUFBIn0=