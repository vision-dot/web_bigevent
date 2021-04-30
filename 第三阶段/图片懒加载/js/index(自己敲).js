$(function() {
    var toolTop = $(".recommend").offset().top; //今日推荐的盒子到顶部的距离
    toggleTool();

    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        };
    }
    $(window).scroll(function() {
        toggleTool();
        $(".floor .w").each(function(i, ele) {
            if ($(document).scrollTop() >= $(ele).offset().top) {
                $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();
            }
        })
    })
    $(".fixedtool li").click(function() {
        var current = $(".floor .w").eq($(this).index()).offset().top;
        $("body,html").stop().animate({
            scrollTop: current
        });
        //页面滚动到某个内容区域，左侧电梯导航小li相应添加和删除current类名
        $(this).addClass("current").siblings().removeClass();
    })
})