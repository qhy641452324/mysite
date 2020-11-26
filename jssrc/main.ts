

//滚动播报插件
;(function ($, window, undefined) {
    var scrollBox = function (this:any ,ele: any, options: any) {
        this.$element = ele;
        this.defaults = {
            speed: 20,
        }
        this.settings = $.extend({}, this.defaults, options);
        this.init();
    };
    scrollBox.prototype.init = function (this:any) {
        var that = this;
        var MyMar:any = null; //初始化一个变量为空 用来存放获取到的文本内容
        var scrollDiv:any = $(that.$element)[0]; //获取整体的开头id
        var scrollBegin:any = $(that.$element.find("#scrollBegin"))[0];; //获取滚动的开头id	
        var scrollEnd :any = $(that.$element.find("#scrollEnd"))[0]; //获取滚动的结束id	
        scrollEnd.innerHTML = scrollBegin.innerHTML; //滚动的是html内部的内容,原生知识!

        //定义一个方法
        function Marquee() {
            if (scrollEnd.offsetWidth - scrollDiv.scrollLeft <= 0){
                scrollDiv.scrollLeft -= scrollBegin.offsetWidth; 
            }else{
                scrollDiv.scrollLeft++;
            }								
            // scrollDiv.scrollLeft++;
        }
        MyMar = setInterval(Marquee, that.settings.speed); //给上面的方法设置时间  setInterval
        //鼠标点击这条公告栏的时候,清除上面的方法,让公告栏暂停
        scrollDiv.onmouseover = function () {
            clearInterval(MyMar);
        }
        //鼠标点击其他地方的时候,公告栏继续运动
        scrollDiv.onmouseout = function () {
            MyMar = setInterval(Marquee, that.settings.speed);
        }
    };
    (<any>$.fn).scrollBox = function (opts: any) {
        //@ts-ignore
        var a:any = new scrollBox(this, opts);
        return a;
    }
})(jQuery, window);


//时间插件

; (function ($: any, window, undefined) {
     //@ts-ignore
    var addTime:any = function (ele:any, options:any) {
         //@ts-ignore
        this.$element = ele;
         //@ts-ignore
        this.defaults = {
            'color': '#c6c6c6',
            'fontSize': '12px',
            'timeStr': '2019'
        };
         //@ts-ignore
        this.settings = $.extend({}, this.defaults, options);
    };
    addTime.prototype.getTime = function () {
        var now = new Date(),
            y = now.getFullYear(),
            m = now.getMonth() + 1,
            d = now.getDate(),
            h = now.getHours(),
            min = now.getMinutes(),
            s = now.getSeconds(),
            time = y + '/' + m + '/' + d + ' ' + h + ':' + min + ':' + s;
        this.settings.timeStr = time;
        return '<p class="t" style="color:' + this.settings.color + '">' + this.settings.timeStr + '</p>';
    }
    addTime.prototype.addDom = function (a:any) {
        var that = this;
        setInterval(function () {
            that.$element.empty().append(that.getTime())
        }, 1000)
    }
    var $fn:any= $.fn;
    $fn.addtime = function (options:any) {
        var a:any = new addTime(this, options);
        return a.addDom();
    }
})(jQuery, window)