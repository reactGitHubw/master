$(function(){
	function aaa() {
		$('.jzdw-21').width($('.beijing').width() * 0.164);
	}
	setInterval(aaa,1)

	var i = 0;
	var time1 = null;
	time1 = setInterval(function(){
		i = i + 5;
		if(i == 105){
			$('.jzdw-21 img').remove();
			$('.jzdw-2 img').attr('src','images/pic_20.jpg')
			$('.beijing').css('backgroundColor','rgba(0,0,0,0)');

			clearInterval(time1);
		}else{
			$('.jzdw-21 img').attr('src','images/loading/'+i+'.png');
		}
	},100);

})
$(function(){
	var i = false;
	$('.jzdw-2').click(function(){
		$('.beijing').css('backgroundColor','rgba(0,0,0,0)');
		$('.jzdw-2>img').remove();
		if (i==false) {
			$('<video src="bideo-mp4/CH_Media01.mp4" controls="controls"></video>').appendTo('.jzdw-2')
			i=true;
		}
	})
})

$(function(){
	$('.wbtn3').click(function(){
		var reg = /^\w{11,12}/;
		if (reg.test($('.input10').val())) {
			$('.wf').attr('id','myModal1');

		}else{
					// $('h4').css('color','red');
					// $('h4').text('格式不正确');
					$('.wf').attr('id','');
					alert('请输入11位手机号码');
				}
			})
	$(function(){
		$('.x-showbtn').click(function(){
			location.href = '加载动画.html';
		})
	})	


})
$(function(){
	$('.wbtn1').hover(function(){
		$(this).attr('src','images/button/btn_prev_on.png')
	},function(){
		$(this).attr('src','images/button/btn_prev_off.png')
	})
	$('.wbtn2').hover(function(){
		$(this).attr('src','images/button/btn_finish_on.png')
	},function(){
		$(this).attr('src','images/button/btn_finish_off.png')
	})
})