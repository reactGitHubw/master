// header————开始
$(function(){
	// header_固定
	$(window).scroll(function(){
		if($(this).scrollTop() > $("#header").length){
			$("#header").addClass("fixed");
		}else{
			$("#header").removeClass("fixed");
		}
	});

	// header_导航栏_左部_小箭头
	$(".nav_left_li a").click(function(){
		$(this).parent().children(".nav_arrow").addClass("show").parent().siblings().children(".nav_arrow").removeClass("show");
	});

	// header_导航栏_隐藏菜单
	$(".nav_hideMenu").click(function(){
		$(".nav_hide").stop(true).slideToggle();
	});
	$(".nav_hideMenu").mouseleave(function(){
		$(".nav_hide").stop(true).slideUp();
	});
	$(".nav_hide").mouseenter(function(){
		$(this).stop(true).show();
	});
	$(".nav_hide").mouseleave(function(){
		$(this).stop(true).slideUp();
	});

	// header_导航栏_右部_隐藏分享菜单
	$(".nav_right_btn div:nth-child(1)").mouseenter(function(){
		$(".nav_share_hide").stop(true).slideDown(500);
	});
	$(".nav_right_btn div:nth-child(1)").mouseleave(function(){
		$(".nav_share_hide").stop(true).slideUp(500);
	});
	$(".nav_share_hide_btn li").mouseenter(function(){
		$(".nav_share_hide").stop(true).show();
	});
	$(".nav_share_hide_btn li").mouseleave(function(){
		$(".nav_share_hide").stop(true).slideUp(500);
	});
	// header_导航栏_右部_隐藏分享菜单_图标变化
	$(".nav_share_hide_btn li a:eq(0)").mouseenter(function(){
		$(this).children().attr("src","images/button/share_renren_on.png");
	}).mouseleave(function(){
		$(this).children().attr("src","images/button/share_renren_off.png");
	});
	$(".nav_share_hide_btn li a:eq(1)").mouseenter(function(){
		$(this).children().attr("src","images/button/share_douban_on.png");
	}).mouseleave(function(){
		$(this).children().attr("src","images/button/share_douban_off.png");
	});
	$(".nav_share_hide_btn li a:eq(2)").mouseenter(function(){
		$(this).children().attr("src","images/button/share_qzone_on.png");
	}).mouseleave(function(){
		$(this).children().attr("src","images/button/share_qzone_off.png");
	});
	$(".nav_share_hide_btn li a:eq(3)").mouseenter(function(){
		$(this).children().attr("src","images/button/share_weibo_on.png");
	}).mouseleave(function(){
		$(this).children().attr("src","images/button/share_weibo_off.png");
	});
	$(".header_shadow").css({width:$("#header").width(),height:$("#header").height()})

})
$(function(){
	var index = 0;
	$('.cool-bimg li').first().clone().appendTo('.cool-bimg');// 克隆第一张图片添加到列表中
	var length = $('.cool-bimg li').length;
	$('.control span').first().addClass('active');
	$('.control span').click(function(){
		index = $(this).index();
		$('.cool-bimg').stop().animate({left:-index * 1280},800);
		$('.control span').eq(index).addClass('active').siblings().removeClass('active');
	})
	var timer = setInterval(sliderTimer,2000)
	function sliderTimer(){
		index++;
		move()
	}
	$('.btn_l').click(function(){
		index--;
		move();
	})
	$('.btn_r').click(function(){
		index++;
		move();
	})

	$('.cool-img,.ty_p').hover(function(){
		clearInterval(timer)
	},function(){
		timer = setInterval(sliderTimer,2000);
	})
	function move(){
		if (index==length) {
			$('.cool-bimg').css({left:0});
			index = 1;
		}
		if (index==-1) {
			$('.cool-bimg').css({left:-(length-1)*1280});
			index = index-2;
		}
		$('.cool-bimg').stop().animate({left:-index * 1280},800)

		if (index==length-1) {
			$('.control span').eq(0).addClass('active').siblings().removeClass('active');
		}else{
			$('.control span').eq(index).addClass('active').siblings().removeClass('active');
		}
	}


	//鼠标滑过余文乐
	$(".cool_yu img").mouseenter(function(){
		$('.control-lft').click()
		$(this).attr("src", "images/small1.png").css({ cursor: "pointer" });
	}).mouseleave(function () {
		$(this).attr("src", "images/v1_small.jpg")
	});
	//鼠标滑过韩火火
	$(".cool_han img").mouseenter(function () {
		$('.control-rig').click()
		$(this).attr("src", "images/small2.png").css({ cursor: "pointer" });
	}).mouseleave(function () {
		$(this).attr("src", "images/v2_small.jpg")
	})
})
$(function(){
  $('.cool-show').on('click',function(){
     $('.cool_video').show();
    })
   $('.cool-show1').on('click',function(){
     $('.cool_video1').show();
    })
   $('.cool_video_close img').on('click',function(){
    $('.cool_video').hide();
    $('.cool_video  video').get(0).pause();
   })
   $('.cool_video_close1 img').on('click',function(){
    $('.cool_video1').hide();
    $('.cool_video1  video').get(0).pause();
   })
})
