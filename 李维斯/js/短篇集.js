$(function(){
	$('.x-con2a img').click(function(){
		if ($('.x-checked').get(0).checked)
		{
			location.href = '你的酷玩.html';
		}else{
			alert("请点击我已经阅读和接受活动准则")
		}
	})
})



// 创作哭完页面  左右按钮和标识按钮之间页面的转换
// $(function(){
// 	var length = $('.x-xulieLi>span').length;
// 	var index = $(this).index();
// 	$('.x-xulieLispan').on('click',function(){
// 		console.log(index);
// 		xuFu(index)
// 	});

// 	$('.x-xulieUl li:first-child').on('click',function(){
// 		if (index<0) {
// 			index = length-1;
// 		}else{
// 			index--;
// 			xuFu(index)
// 		}
// 	})
// 	$('.x-xulieUl li:last-child').on('click',function(){
// 		if (index>length-1) {
// 			index = 0;
// 		}else{
// 			index++;
// 			xuFu(index)
// 		}
// 	})
// 	function xuFu(index){

// 		$('.x-xulieLi>span').eq(index).addClass('x-con2-1Span x-conspan').siblings().removeClass('x-con2-1Span'); 
// 		$('.x-content2-1-con>div').eq(index).css('display','block').siblings().css('display','none');
// 	}

// })
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

})
//  创作酷玩页面中 点击播放视频 下面的播放量加1
$(function(){
	$('.x-c21-bgi').on('click',function(){
		console.log($(this).parent('.x-c21-top').siblings('.x-c21-bottom').children('.x-ct2-1lf').children('.x-ct2-1lf span:last-child').text());
		$('.x-ct2-1lf span:last-child').text(parseInt($(this).parent('.x-c21-top').siblings('.x-c21-bottom').children('.x-ct2-1lf').children('.x-ct2-1lf span:last-child').text())+1)
	})
	
})

