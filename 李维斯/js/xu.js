

// 你的酷玩主页
$(function(){

	$('.x-con2a img').click(function(){
		if ($('.x-checked').get(0).checked)
		{
			location.href = '上传图片.html';
		}else{
			alert("请点击我已经阅读和接受活动准则")
		}
	})
	$('.x-con2a img').hover(function(){
		$(this).attr('src','images/button/btn_join_on.png')
	},function(){
		$(this).attr('src','images/button/btn_join_off.png')
	})
	$('.x-con2footer .x-conFta1 img').hover(function(){
		$(this).attr('src','images/button/btn_watchvideo_on.png')
	},function(){
		$(this).attr('src','images/button/btn_watchvideo_off.png')
	})
	$('.x-con2footer .x-conFta2 img').hover(function(){
		$(this).attr('src','images/button/btn_winners_on.png')
	},function(){
		$(this).attr('src','images/button/btn_winners_off.png')
	})
})




// 创作哭完页面  左右按钮和标识按钮之间页面的转换

$(function(){
	function onee(){
		$('.one span').addClass('x-con2-1Span')
		$('.two span').removeClass('x-con2-1Span')
		$('.x-chuanjianwanku').show().siblings().hide();
	}
	function twoo(){
		$('.two span').addClass('x-con2-1Span')
		$('.one span').removeClass('x-con2-1Span')
		$('.x-chuanjianwanku1').show().siblings().hide();
	}
	$('.one').click(function(){
		onee();
	})
	$('.two').click(function(){
		twoo()
	})
	// 点击左键头相当于点击一次1  点击右箭头相当于点击一次2
	$('.x-xulieUl li:first-child').click(function(){
		$('.one').click();
		
	})
	$('.x-xulieUl li:last-child').click(function(){
		$('.two').click();
	})
	$('.x-jiazaigengduo').click(function() {
		$('.x-chuanjianwanku1').show()
		$('.x-jiazaigengduo').hide()
		})	

})
//  创作酷玩页面中 点击播放视频 下面的播放量加1
$(function(){
	$('.x-c21-bgi').on('click',function(){
		console.log($(this).parent('.x-c21-top').siblings('.x-c21-bottom').children('.x-ct2-1lf').children('.x-ct2-1lf span:last-child').text());
		$('.x-ct2-1lf span:last-child').text(parseInt($(this).parent('.x-c21-top').siblings('.x-c21-bottom').children('.x-ct2-1lf').children('.x-ct2-1lf span:last-child').text())+1)
	})
	$('.x-con21-footer img').hover(function(){
		$(this).attr('src','images/button/btn_create_on.png')
	},function(){
		$(this).attr('src','images/button/btn_create_off.png')
	})
})

