
// 滚动播报
$('#scrollDiv').scrollBox();

$('.timeBox').addtime({
  'color': 'grey'
});

var pathUrl = window.location.origin;

//新建
$("#btn1").on("click", function () {
  $("#main").empty().focus();
  $("#pathBlock").css("display", "none")
});

function getInfo(id) {
  var id = $("#textId").val() ? $("#textId").val() : id;
  if (!id) return;
  $.ajax({
    url: pathUrl + "/getCode/" + id,
    type: 'GET',
    async: true,
    success: function (msg) {
      console.log(msg);
      if (msg.data) {
        $("#main").empty().append(msg.data.info)
        hljs.initHighlightingOnLoad();
        hljs.highlightBlock(document.querySelector('pre code'));
      }
      // [].forEach.call(document.querySelectorAll('pre code'), function(block){
      //     hljs.highlightBlock(block);
      // });
    },
    error: function (err) { }
  })
}
//查询
$("#btn2").on("click", function () {
  $("#pathBlock").css("display", "none")
  getInfo();
});

//监听文本发生变化后hljs渲染
$('#main').on('input propertychange', function () {
  // console.info($(this).html()) 
  // var infos = $($(this).html());
  // $(this).html($(this).text().replace(/[\n\r]/g, '<br>'))
  // $(this).empty().append(infos);
  // hljs.initHighlightingOnLoad();
  $(this).prop("class", $("#changeLaun option:selected").val());
  hljs.highlightBlock(document.querySelector('pre code'));
});

//保存
$("#btn3").on("click", function () {
  var infos = $("#main").html();
  if (!infos) return;
  $.ajax({
    url: pathUrl + "/setCode",
    type: 'post',
    data: {
      infos: infos
    },
    success: function (msg) {
      console.log(msg);
      $("#pathBlock").css("display", "inline-flex");
      $("#pathId").val(window.location.host + "/codes/" + msg.data.id);
    },
    error: function (err) {

    }
  })
});

//样式下拉
function initHLSelect() {
  // styleArr = ["agate.css","androidstudio.css","arduino-light.css","arta.css","ascetic.css","atelier-cave-dark.css","atelier-cave-light.css","atelier-dune-dark.css","atelier-dune-light.css","atelier-estuary-dark.css","atelier-estuary-light.css","atelier-forest-dark.css","atelier-forest-light.css","atelier-heath-dark.css","atelier-heath-light.css","atelier-lakeside-dark.css","atelier-lakeside-light.css","atelier-plateau-dark.css","atelier-plateau-light.css","atelier-savanna-dark.css","atelier-savanna-light.css","atelier-seaside-dark.css","atelier-seaside-light.css","atelier-sulphurpool-dark.css","atelier-sulphurpool-light.css","brown-paper.css","codepen-embed.css","color-brewer.css","dark.css","darkula.css","default.css","docco.css","dracula.css","far.css","foundation.css","github.css","github-gist.css","googlecode.css","grayscale.css","gruvbox-dark.css","gruvbox-light.css","hopscotch.css","hybrid.css","idea.css","ir-black.css","kimbie.dark.css","kimbie.light.css","magula.css","mono-blue.css","monokai.css","monokai-sublime.css","obsidian.css","paraiso-dark.css","paraiso-light.css","pojoaque.css","purebasic.css","qtcreator_dark.css","qtcreator_light.css","railscasts.css","rainbow.css","school-book.css","solarized-dark.css","solarized-light.css","sunburst.css","tomorrow.css","tomorrow-night.css","tomorrow-night-blue.css","tomorrow-night-bright.css","tomorrow-night-eighties.css","vs.css","xcode.css","xt256.css","zenburn.css"];
  styleArr = ['monokai-sublime.css'];
  selectHtml = [];
  selectHtml.push('<select id="changeStyle">');
  for (i in styleArr) {
    OptionValue = styleArr[i];
    selectHtml.push('<option value="' + OptionValue + '" >' + OptionValue + '</option>');
  }
  selectHtml.push('</select>');
  var selectHtmlString = selectHtml.join("");
  try {
    document.getElementById('changeStyleSelect').innerHTML = selectHtmlString;
    var obj = document.getElementById('changeStyle');
    document.createElement('link').setAttribute('href', '../static/highlight/monokai-sublime.css');
    $("#changeStyle").val('monokai-sublime.css');
    obj.addEventListener("change", function (event) {
      var value = this.options[this.options.selectedIndex].value;
      l = document.createElement('link');
      l.setAttribute('href', '../static/highlight/' + value);
      l.setAttribute('rel', 'stylesheet');
      document.head.appendChild(l);
    });
  } catch (error) {

  }
}
// initHLSelect();

//语言下拉
function initLaunSelect() {
  var lanArr = hljs.listLanguages().sort();
  sel = [];
  sel.push('<select id="changeLaun">');
  for (i in lanArr) {
    OptionValue = lanArr[i];
    sel.push('<option value="' + OptionValue + '" >' + OptionValue + '</option>');
  }
  sel.push('</select>');
  var selectHtmlString = sel.join("");
  try {
    document.getElementById('changeLaunSelect').innerHTML = selectHtmlString;
    var obj = document.getElementById('changeLaun');
    $("#changeLaun").val('javascript');
    obj.addEventListener("change", function (event) {
      var value = this.options[this.options.selectedIndex].value;
      console.log(value)
      $("#main").prop("class", value);
      hljs.initHighlightingOnLoad();
      hljs.highlightBlock(document.querySelector('pre code'));
      // [].forEach.call(document.querySelectorAll('pre code'), function(block){
      //     hljs.highlightBlock(block);
      // });
    });
  } catch (error) {

  }
}
initLaunSelect();

(function () {
  // hljs.configure({useBR: true});
  hljs.initHighlightingOnLoad();
  $("#pathBlock").css("display", "none")
  var id = $("#specialId").html()
  if (!id) return;
  getInfo(id);
})()

//复制链接
$("#copyId").on("click", function () {
  $("#pathId").select();
  document.execCommand("Copy");
});


//register

$('#registerTab').on('click', function () {
  $('#register').css({ 'display': 'block' })
});
function Myclose() {
  $('#register').css({ 'display': 'none' })
};
function register() {
  var name = registerForm.user.value;
  var nickname = registerForm.nickname.value;
  var phonenum = registerForm.phonenum.value;
  var pwd = registerForm.pwd.value;
  var region = registerForm.region.value;
  $.ajax({
    url: pathUrl + "/setUser",
    type: 'post',
    data: {
      name: name,
      nickname: nickname,
      phonenum: phonenum,
      pwd: pwd,
      region: region
    },
    success: function (msg) {
      console.log(msg);
      if (msg.code == 200) { alert('success') }
      $('#register').css({ 'display': 'none' })
    },
    error: function (err) {

    }
  })
}

// &传参
function toChat(val) {
  $.ajax({
    url: pathUrl + "/chatInfo?key=" + val,
    type: 'get',
    success: function (msg) {
      console.log(msg);
      var reply = msg?.backInfo?.reply || "";
      reply = reply ? reply : '走丢了~~~';
      var $span = '<div style="padding: 6px 0;"><em class="xticon"></em><span class="replytxt">' + reply + '</span></div>';
      $('#chatlist').append($span);
      $("#txtmsg").val("");
      var div = document.getElementById('chatlist');
      div.scrollTop = div.scrollHeight;  //控制最新的消息始终在底部
    },
    error: function (err) {

    }
  })
}

function keydownMsg(evt) {
  evt = (evt) ? evt : ((window.event) ? window.event : "");
  keyCode = evt.keyCode ? evt.keyCode : (evt.which ? evt.which : evt.charCode);
  if (keyCode == 13) {
    var val = document.getElementById("txtmsg").value;
    var $min = '<div style="text-align:right;overflow: hidden;padding:6px 0"><span class="replytxt myreplay" style="">' + val + '</span> <em class="myicon"></em></div>';
    $('#chatlist').append($min);
    toChat(val);
    //alert(document.getElementById("txtmsg").value);//回车键弹出文本框信息
  }
}
$('#txtmsg').on("keydown", keydownMsg);

$('.chat-block').on('click', function () { $('#chat').css({ 'display': 'block' }) });
$('#closeChat').on('click', function () { $('#chat').css({ 'display': 'none' }) });

//

let arr = [10, 1, 2, 5, 3, 8, 4, 7, 9];

function pSort(arr) {
  var len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j <= len - i; ++j) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}


function insertSort(arr) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}


function qSort(arr) {
  if (arr.length <= 1) {  //一定要加否则栈内存溢出哦
    return arr;
  }
  let left = [], right = [];
  let base = arr[0]; //最好取一个中间值，会更快
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= base) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  let back = qSort(left).concat([base], qSort(right));
  return back;
}













