$(function () {
    $(".top-button-left img:eq(0)").mouseenter(function () {
        $(this).attr("src", "images/button/btn_watchvideo_on.png")
    }).mouseleave(function () {
        $(this).attr("src", "images/button/btn_watchvideo_off.png")
    })

    $(".top-button-left img:eq(1)").mouseenter(function () {
        $(this).attr("src", "images/button/btn_create_on.png")
    }).mouseleave(function () {
        $(this).attr("src", "images/button/btn_create_off.png")
    })
})

//视频内容部分
$(function () {
    //滑过图片变换播放
    $(".content-video li").mouseenter(function () {
        $(this).children("img:eq(1)").show();
    }).mouseleave(function(){
        $(this).children("img:eq(1)").hide();
    })
})
//视频播放
$(function(){
    $(".content-video li img,.content-video li a").click(function(){
        $(".video1").show();
        var $dataSrc = $(this).attr("data-src");
        $(".video2 video").attr("src",$dataSrc);
    })
    // 关闭
    $(".close img").click(function () {
        $(".video1").hide();
        //视频暂停
        $(".video2 video").get(0).pause();
    })

})


//更多按钮  获取每年递减的获奖名单
$(function(){
    $(".more-center img").mouseenter(function(){
        $(this).attr("src","images/button/btn_chakan_on.png")
    }).mouseleave(function(){
        $(this).attr("src","images/button/btn_chakan_off.png")
    })
    var $year=2019;
    var $month = 6;
    //初始化时间
    $(".content-wenzi p").text(+ $year+ "年"+ $month + "月获奖名单");
    $(".more-center img").click(function(){
        var $xxx = $(".section-content:eq(0)").clone(true);
        $(".content").append($xxx);
        $month--;
        if ($month<1) {
            $month=12;
            $year--;
        }
        //克隆后的值
        $xxx.find($(".content-wenzi p")).text(+$year+"年" + $month + "月获奖名单");
    })

})

// 手机端
$(function(){
    var $year=2019;
    var $month = 6;
    //初始化时间
    $(".content-wenzi p").text(+ $year+ "年"+ $month + "月获奖名单");
    $(".more-center_1 img").click(function(){
        var $xxx = $(".banner_zong:eq(0)").clone(true);
        $(".huojiang_shoujiduan").append($xxx);
        $month--;
        if ($month<1) {
            $month=12;
            $year--;
        }
        //克隆后的值
        $xxx.find($(".content-wenzi p")).text(+$year+"年" + $month + "月获奖名单");
    })

})