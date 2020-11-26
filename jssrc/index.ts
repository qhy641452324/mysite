/**
 * 首页
 * */

require("../modules/drag"); 
import _ from "lodash";

let ganhuo = {
  init:function(){
    let that = this;
    that.getData(1);
    that.scrollFun();
  },
  getData: function (pagenum:number) {
    $.ajax({
      // url: "https://gank.io/api/v2/data/category/GanHuo/type/frontend/page/1/count/20",
      url:"https://gank.io/api/v2/data/category/All/type/frontend/page/"+pagenum+"/count/20",
      type: 'get',
      data: {},
      success: function (msg:any) {
        console.log(msg);
        if (msg.status == 100){
          let list = msg.data;
          let itemstr = "";
          for(let i = 0;i < list.length;i++){
            itemstr += '<div class="item">'
              + '<a href="' + list[i].url +'" target="_blank">'
                + '<h2 class="txt" >' + list[i].title + '</h2>'
                + '<div class="desc">' + list[i].desc + '</div>'
              + '</a>'
              + '<div class="bottom">'
                + '<div class="lab"><span>作者:</span>' + list[i].author + '</div>'
                + '<div class="lab"><span>更新时间:</span><span>' + list[i].createdAt + '</span></div>'
              + '<div class="lab"><span>views:</span><span>' + list[i].views + '</span></div>'
              + '</div>'
              + '</div >'
          }
          // $("#ghlist-wrap").html(itemstr)
          $("#ghlist-wrap").append($(itemstr))
        };
      },
      error: function (err) {

      }
    })
  },
  /**
   * 滚动加载
   */
  scrollFun:function(){
    let that = this,num = 1;
    $(window).on('scroll', _.debounce(function () {
      let scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
      let windowHeight = document.compatMode == "CSS1Compat" ? document.documentElement.clientHeight : document.body.clientHeight;
      let documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      if (scrollTop + windowHeight >= documentHeight) {
        that.getData(num += 1)
      }
    },500));
  }
};
ganhuo.init();


interface Jquery {
  dragbox: any
};
var dragbox:any = $("#chat");
dragbox.dragbox();