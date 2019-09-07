// 按钮变化
$(function(){
    $(".c-btn img").mouseenter(function(){
        $(this).attr("src","images/button/btn_create_on.png")
    }).mouseleave(function(){
        $(this).attr("src","images/button/btn_create_off.png")
    })
})
//视频播放
$(function(){
    $(".shipinji ul li div").click(function(){
        $(".video1").show();
        console.log($('.yanjing span:last-child').text())
        // $('.yanjing span:last-child').text(parseInt($(this).sibling().children().eq(1).text())+1)
    });
    $(".close").click(function(){
        $(".video1").hide();
        $(".video2 video").get(0).pause();
    })
})
//数据变化
$(function(){  
    $()
});

$(function(){
    $(".shipinji li").mouseenter(function(){
        $(this).children().children(".input-hover").show();
      
    }).mouseleave(function(){
        $(this).children().children(".input-hover").hide();
       
    })
});
$(function(){
    $('.x-xiala').click(function(){
        var cloneUl = $('.shipinji ul').clone(true);
        $(this).before(cloneUl);
    })
})