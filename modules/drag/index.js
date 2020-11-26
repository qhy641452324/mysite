
$.fn.dragbox = function(){
    var ele = $(this);
    if(!ele)return false;
    ele.on("mousedown", function (e) {
        // e.pageX
        var positionDiv = $(this).offset();
        var distenceX = e.pageX - positionDiv.left;
        var distenceY = e.pageY - positionDiv.top + $(document).scrollTop();  //加滚动高度

        $(document).on("mousemove", function (e) {
            var x = e.pageX - distenceX;
            var y = e.pageY - distenceY;

            if (x < 0) {
                x = 0; 
            } else if (x > $(document).width() - ele.outerWidth(true)) {
                x = $(document).width() - ele.outerWidth(true);
            }

            if (y < 0) {
                y = 0;
            } else if (y > $(document).height() - ele.outerHeight(true)) {
                y = $(document).height() - ele.outerHeight(true);
            }

            ele.css({
                'left': x + 'px',
                'top': y + 'px'
            });
        });

        $(document).on("mouseup", function () {
            $(document).off('mousemove');
        });
    });
}

// $('#chat').on("mousedown",function (e) {
//     // e.pageX
//     var positionDiv = $(this).offset();
//     var distenceX = e.pageX - positionDiv.left;
//     var distenceY = e.pageY - positionDiv.top + $(document).scrollTop();  //加滚动高度

//     $(document).on("mousemove",function (e) {
//         var x = e.pageX - distenceX;
//         var y = e.pageY - distenceY;

//         if (x < 0) {
//             x = 0;
//         } else if (x > $(document).width() - $('#chat').outerWidth(true)) {
//             x = $(document).width() - $('#chat').outerWidth(true);
//         }

//         if (y < 0) {
//             y = 0;
//         } else if (y > $(document).height() - $('#chat').outerHeight(true)) {
//             y = $(document).height() - $('#chat').outerHeight(true);
//         }

//         $('#chat').css({
//             'left': x + 'px',
//             'top': y + 'px'
//         });
//     });

//     $(document).on("mouseup",function () {
//         $(document).off('mousemove');
//     });
// });
