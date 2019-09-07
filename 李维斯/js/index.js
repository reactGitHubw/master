$(function(){
	// 图片
	$('.li_li1').mouseover(function(){
		$('.li_li1 .xianshi_1').show();
	}	)
	$('.li_li1').mouseout(function(){
		$('.li_li1 .xianshi_1').hide();
	})
	$('.li_li2').mouseover(function(){
		$('.li_li2 .xianshi_2').show();
	}	)
	$('.li_li2').mouseout(function(){
		$('.li_li2 .xianshi_2').hide();
	})
	$('.li_li3').mouseover(function(){
		$('.li_li3 .xianshi_3').show();
	}	)
	$('.li_li3').mouseout(function(){
		$('.li_li3 .xianshi_3').hide();
	})


	$('.li_li4').mouseover(function(){
		$('.li_li4 .xianshi_4').show();
	}	)
	$('.li_li4').mouseout(function(){
		$('.li_li4 .xianshi_4').hide();
	})
	$('.li_li5').mouseover(function(){
		$('.li_li5 .xianshi_5').show();
	}	)
	$('.li_li5').mouseout(function(){
		$('.li_li5 .xianshi_5').hide();
	})
	$('.li_li6').mouseover(function(){
		$('.li_li6 .xianshi_6').show();
	}	)
	$('.li_li6').mouseout(function(){
		$('.li_li6 .xianshi_6').hide();
	})

	$('.li_li7').mouseover(function(){
		$('.li_li7 .xianshi_7').show();
	}	)
	$('.li_li7').mouseout(function(){
		$('.li_li7 .xianshi_7').hide();
	})
	$('.li_li8').mouseover(function(){
		$('.li_li8 .xianshi_8').show();
	}	)
	$('.li_li8').mouseout(function(){
		$('.li_li8 .xianshi_8').hide();
	})
	$('.li_li9').mouseover(function(){
		$('.li_li9 .xianshi_9').show();
	}	)
	$('.li_li9').mouseout(function(){
		$('.li_li9 .xianshi_9').hide();
	})

	$('.li_li10').mouseover(function(){
		$('.li_li10 .xianshi_10').show();
	}	)
	$('.li_li10').mouseout(function(){
		$('.li_li10 .xianshi_10').hide();
	})
	$('.li_li11').mouseover(function(){
		$('.li_li11 .xianshi_11').show();
	}	)
	$('.li_li11').mouseout(function(){
		$('.li_li11 .xianshi_11').hide();
	})
	$('.li_li12').mouseover(function(){
		$('.li_li12 .xianshi_12').show();
	}	)
	$('.li_li12').mouseout(function(){
		$('.li_li12 .xianshi_12').hide();
	})


	$('.tupianzhanshi .lijigoumai').on('click',function(){
		$('.tupianzhanshi .xianshi').show();
		$('.tupianzhanshi .lijigoumai').hide();
	})

})


// 手机端轮播图
$(function(){
	var index = 0;
	var timer = null;
	var length = $('.tupianzhanshi_xiao ul li').length;// 返回判断的数量

	function slider(){
		$('.tupianzhanshi_xiao ul').stop().animate({marginLeft:'-400px'},function(){
			var a = $('.tupianzhanshi_xiao ul li:first').clone(true);
			$('.tupianzhanshi_xiao ul li:first').remove();//删除列表第一项
			a.appendTo('.tupianzhanshi_xiao ul');// 将克隆到的列表添加到列表后
			$('.tupianzhanshi_xiao ul').css('marginLeft','0');
		})
	}
	timer = setInterval(slider,5000)
	// 鼠标触碰元素绑定事件
	$('.tupianzhanshi_xiao img,.btn_r,.btn_l').mouseenter(function(){
		clearInterval(timer);
	})
	$('.tupianzhanshi_xiao img,.btn_r,.btn_l').mouseleave(function(){
		timer = setInterval(slider,5000)
	})
	// 点击右边按钮
	$('.btn_r').click(function(){
		clearInterval(timer);
		slider();
	})
	// 点击左边按钮
	$('.btn_l').click(function(){
		var A = $('.tupianzhanshi_xiao ul li:last').clone(true);// 克隆列表最后一张图片
		$('.tupianzhanshi_xiao ul li:last').remove();//删除列表最后一项
		$('.tupianzhanshi_xiao ul').prepend(A);// 将克隆到的列表添加到列表前面
		$('.tupianzhanshi_xiao ul').css('marginLeft','-400px');
		$('.tupianzhanshi_xiao ul').stop().animate({'marginLeft':'0px'},1000,'linear')
	})
})