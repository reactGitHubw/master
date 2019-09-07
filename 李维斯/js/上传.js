$(function () {
	// 添加图片
	$(".input_file").change(function () {
		$(this).parent().siblings(".input_img_hide").show()
		var inputEq = $(this).parent().parent().index()
		var file = this.files[0];
		var reader = new FileReader();
		reader.readAsDataURL(file)
		reader.onload = function () {
			$(".input_img_hide").eq(inputEq).append("<img>").children("img").attr("src", this.result)
		}
	});
	// 鼠标事件
	$(".input_img_hide").mouseenter(function () {
		$(this).children(".input_hover").show().parent().children(".input_hover_delete").show();
	}).mouseleave(function () {
		$(this).children(".input_hover").hide().parent().children(".input_hover_delete").hide();
	})
	// 图片删除
	$(".input_hover_delete").click(function () {
		$(this).next("img").remove();
		$(this).parent().hide();
	})
	// 批量上传
	// 点击批量上传  清空之前上传的图片
	$(".all_input").click(function () {
		$(".input_hover_delete").next("img").remove();
		$(".input_img_hide").hide();
	})
	$(".all_input").change(function () {
		for (let i = 0; i < this.files.length; i++) {
			$(".input_img_hide").eq(i).show();
			//获取到每一个文件
			var file = this.files[i];
			var reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = function () {
				$(".input_img_hide").eq(i).append("<img>").children("img").attr("src", this.result);
			}

		}

	});
	// 验证图片数量
	$(".img_bottom_button_right a").click(function () {
		console.log($(".input_img_hide").children("img").length)
		if ($(".input_img_hide").children("img").length == 10) {
			$(".img_bottom_button_right a").attr("href", "输入显示.html")
		} else {
			alert("图片数量不足十张");
			return false;
		}

	})
	$(".all_input").mouseenter(function(){
		$(this).siblings("img").attr("src","images/button/btn_upload_on.png")
	})
	$(".all_input").mouseleave(function(){
		$(this).siblings("img").attr("src","images/button/btn_upload_off.png")
	})
	$(".img_bottom_button_left a").mouseenter(function(){
		$(this).children("img").attr("src","images/button/btn_prev_on.png")
	})
	$(".img_bottom_button_left a").mouseleave(function(){
		$(this).children("img").attr("src","images/button/btn_prev_off.png")
	})
	$(".img_bottom_button_right a").mouseenter(function(){
		$(this).children("img").attr("src","images/button/btn_next_on.png")
	})
	$(".img_bottom_button_right a").mouseleave(function(){
		$(this).children("img").attr("src","images/button/btn_next_off.png")
	})
})
