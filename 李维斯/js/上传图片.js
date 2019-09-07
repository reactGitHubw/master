$(document).ready(function()//入口函数
{   
    
            // 1
            var tpghkz_1=false;
            $('.gxqq_1').click(function(){
                tpghkz_1=true;
                console.log(tpghkz_1);
            })
            $('.gxqq_1').mouseenter(function(){
                if(tpghkz_1==true){
                    $('.crtppd_1').css('backgroundColor','rgba(0,0,0,.7)');
                    $('.crtppd_1').css('zIndex','100');
                    $('.crtppd_tp_1').css('display','block');

                }   
            })
            $('.gxqq_1').mouseleave(function(){
                $('.crtppd_1').css('backgroundColor','rgba(0,0,0,0)');
                $('.crtppd_1').css('zIndex','0');
                $('.crtppd_tp_1').css('display','none');  
            })
            $('.crtppd_tp_1').click(function(ev){
                $('.preview_1 img').remove();
                $('.preview_1').append('<img></img>');
                $('.preview_1 img').attr('src','images/add_photo_plus.png');
                $('.preview_1 img').addClass('img-responsive');
                tpghkz_1=false;
                ev.stopPropagation();
                console.log(tpghkz_1);
            })
            //2
            var tpghkz_2=false;
            $('.gxqq_2').click(function(){
                tpghkz_2=true;
                console.log(tpghkz_2);
            })
            $('.gxqq_2').mouseenter(function(){
                if(tpghkz_2==true){
                    $('.crtppd_2').css('backgroundColor','rgba(0,0,0,.7)');
                    $('.crtppd_2').css('zIndex','100');
                    $('.crtppd_tp_2').css('display','block');

                }   
            })
            $('.gxqq_2').mouseleave(function(){
                $('.crtppd_2').css('backgroundColor','rgba(0,0,0,0)');
                $('.crtppd_2').css('zIndex','0');
                $('.crtppd_tp_2').css('display','none');  
            })
            $('.crtppd_tp_2').click(function(ev){
                $('.preview_2 img').remove();
                $('.preview_2').append('<img></img>');
                $('.preview_2 img').attr('src','images/add_photo_plus.png');
                $('.preview_2 img').addClass('img-responsive');
                tpghkz_2=false;
                ev.stopPropagation();
                console.log(tpghkz_2);
            })
            //3
            var tpghkz_3=false;
            $('.gxqq_3').click(function(){
                tpghkz_3=true;
                console.log(tpghkz_3);
            })
            $('.gxqq_3').mouseenter(function(){
                if(tpghkz_3==true){
                    $('.crtppd_3').css('backgroundColor','rgba(0,0,0,.7)');
                    $('.crtppd_3').css('zIndex','100');
                    $('.crtppd_tp_3').css('display','block');

                }   
            })
            $('.gxqq_3').mouseleave(function(){
                $('.crtppd_3').css('backgroundColor','rgba(0,0,0,0)');
                $('.crtppd_3').css('zIndex','0');
                $('.crtppd_tp_3').css('display','none');  
            })
            $('.crtppd_tp_3').click(function(ev){
                $('.preview_3 img').remove();
                $('.preview_3').append('<img></img>');
                $('.preview_3 img').attr('src','images/add_photo_plus.png');
                $('.preview_3 img').addClass('img-responsive');
                tpghkz_3=false;
                ev.stopPropagation();
                console.log(tpghkz_3);
            })
            //4
            var tpghkz_4=false;
            $('.gxqq_4').click(function(){
                tpghkz_4=true;
                console.log(tpghkz_4);
            })
            $('.gxqq_4').mouseenter(function(){
                if(tpghkz_4==true){
                    $('.crtppd_4').css('backgroundColor','rgba(0,0,0,.7)');
                    $('.crtppd_4').css('zIndex','100');
                    $('.crtppd_tp_4').css('display','block');

                }   
            })
            $('.gxqq_4').mouseleave(function(){
                $('.crtppd_4').css('backgroundColor','rgba(0,0,0,0)');
                $('.crtppd_4').css('zIndex','0');
                $('.crtppd_tp_4').css('display','none');  
            })
            $('.crtppd_tp_4').click(function(ev){
                $('.preview_4 img').remove();
                $('.preview_4').append('<img></img>');
                $('.preview_4 img').attr('src','images/add_photo_plus.png');
                $('.preview_4 img').addClass('img-responsive');
                tpghkz_4=false;
                ev.stopPropagation();
                console.log(tpghkz_4);
            })
            //5
            var tpghkz_5=false;
            $('.gxqq_5').click(function(){
                tpghkz_5=true;
                console.log(tpghkz_5);
            })
            $('.gxqq_5').mouseenter(function(){
                if(tpghkz_5==true){
                    $('.crtppd_5').css('backgroundColor','rgba(0,0,0,.7)');
                    $('.crtppd_5').css('zIndex','100');
                    $('.crtppd_tp_5').css('display','block');

                }   
            })
            $('.gxqq_5').mouseleave(function(){
                $('.crtppd_5').css('backgroundColor','rgba(0,0,0,0)');
                $('.crtppd_5').css('zIndex','0');
                $('.crtppd_tp_5').css('display','none');  
            })
            $('.crtppd_tp_5').click(function(ev){
                $('.preview_5 img').remove();
                $('.preview_5').append('<img></img>');
                $('.preview_5 img').attr('src','images/add_photo_plus.png');
                $('.preview_5 img').addClass('img-responsive');
                tpghkz_5=false;
                ev.stopPropagation();
                console.log(tpghkz_5);
            })
            //6
            var tpghkz_6=false;
            $('.gxqq_6').click(function(){
                tpghkz_6=true;
                console.log(tpghkz_6);
            })
            $('.gxqq_6').mouseenter(function(){
                if(tpghkz_6==true){
                    $('.crtppd_6').css('backgroundColor','rgba(0,0,0,.7)');
                    $('.crtppd_6').css('zIndex','100');
                    $('.crtppd_tp_6').css('display','block');

                }   
            })
            $('.gxqq_6').mouseleave(function(){
                $('.crtppd_6').css('backgroundColor','rgba(0,0,0,0)');
                $('.crtppd_6').css('zIndex','0');
                $('.crtppd_tp_6').css('display','none');  
            })
            $('.crtppd_tp_6').click(function(ev){
                $('.preview_6 img').remove();
                $('.preview_6').append('<img></img>');
                $('.preview_6 img').attr('src','images/add_photo_plus.png');
                $('.preview_6 img').addClass('img-responsive');
                tpghkz_6=false;
                ev.stopPropagation();
                console.log(tpghkz_6);
            })
            //7
            var tpghkz_7=false;
            $('.gxqq_7').click(function(){
                tpghkz_7=true;
                console.log(tpghkz_7);
            })
            $('.gxqq_7').mouseenter(function(){
                if(tpghkz_7==true){
                    $('.crtppd_7').css('backgroundColor','rgba(0,0,0,.7)');
                    $('.crtppd_7').css('zIndex','100');
                    $('.crtppd_tp_7').css('display','block');

                }   
            })
            $('.gxqq_7').mouseleave(function(){
                $('.crtppd_7').css('backgroundColor','rgba(0,0,0,0)');
                $('.crtppd_7').css('zIndex','0');
                $('.crtppd_tp_7').css('display','none');  
            })
            $('.crtppd_tp_7').click(function(ev){
                $('.preview_7 img').remove();
                $('.preview_7').append('<img></img>');
                $('.preview_7 img').attr('src','images/add_photo_plus.png');
                $('.preview_7 img').addClass('img-responsive');
                tpghkz_7=false;
                ev.stopPropagation();
                console.log(tpghkz_7);
            })
            //8
            var tpghkz_8=false;
            $('.gxqq_8').click(function(){
                tpghkz_8=true;
                console.log(tpghkz_8);
            })
            $('.gxqq_8').mouseenter(function(){
                if(tpghkz_8==true){
                    $('.crtppd_8').css('backgroundColor','rgba(0,0,0,.7)');
                    $('.crtppd_8').css('zIndex','100');
                    $('.crtppd_tp_8').css('display','block');

                }   
            })
            $('.gxqq_8').mouseleave(function(){
                $('.crtppd_8').css('backgroundColor','rgba(0,0,0,0)');
                $('.crtppd_8').css('zIndex','0');
                $('.crtppd_tp_8').css('display','none');  
            })
            $('.crtppd_tp_8').click(function(ev){
                $('.preview_8 img').remove();
                $('.preview_8').append('<img></img>');
                $('.preview_8 img').attr('src','images/add_photo_plus.png');
                $('.preview_8 img').addClass('img-responsive');
                tpghkz_8=false;
                ev.stopPropagation();
                console.log(tpghkz_8);
            })
            //9
            var tpghkz_9=false;
            $('.gxqq_9').click(function(){
                tpghkz_9=true;
                console.log(tpghkz_9);
            })
            $('.gxqq_9').mouseenter(function(){
                if(tpghkz_9==true){
                    $('.crtppd_9').css('backgroundColor','rgba(0,0,0,.7)');
                    $('.crtppd_9').css('zIndex','100');
                    $('.crtppd_tp_9').css('display','block');

                }   
            })
            $('.gxqq_9').mouseleave(function(){
                $('.crtppd_9').css('backgroundColor','rgba(0,0,0,0)');
                $('.crtppd_9').css('zIndex','0');
                $('.crtppd_tp_9').css('display','none');  
            })
            $('.crtppd_tp_9').click(function(ev){
                $('.preview_9 img').remove();
                $('.preview_9').append('<img></img>');
                $('.preview_9 img').attr('src','images/add_photo_plus.png');
                $('.preview_9 img').addClass('img-responsive');
                tpghkz_9=false;
                ev.stopPropagation();
                console.log(tpghkz_9);
            })
            //10
            var tpghkz_10=false;
            $('.gxqq_10').click(function(){
                tpghkz_10=true;
                console.log(tpghkz_10);
            })
            $('.gxqq_10').mouseenter(function(){
                if(tpghkz_10==true){
                    $('.crtppd_10').css('backgroundColor','rgba(0,0,0,.7)');
                    $('.crtppd_10').css('zIndex','100');
                    $('.crtppd_tp_10').css('display','block');

                }   
            })
            $('.gxqq_10').mouseleave(function(){
                $('.crtppd_10').css('backgroundColor','rgba(0,0,0,0)');
                $('.crtppd_10').css('zIndex','0');
                $('.crtppd_tp_10').css('display','none');  
            })
            $('.crtppd_tp_10').click(function(ev){
                $('.preview_10 img').remove();
                $('.preview_10').append('<img></img>');
                $('.preview_10 img').attr('src','images/add_photo_plus.png');
                $('.preview_10 img').addClass('img-responsive');
                tpghkz_10=false;
                ev.stopPropagation();
                console.log(tpghkz_10);
            })










            var tpsckz=true;
            //添加图片函数
            function fileSelectHandler(filekit,$previewView)
            {
                var self = this;
                var imgData = filekit.imageInfo();

                var $image = $("<img/>");
                $image.load(function()
                {
                    $previewView.empty();
                    $previewView.append($image);
                    // console.log('gxq520');
                });
                $image.attr("src",imgData["data"]);
                // console.log('gxq521');
            }
            //1
            var filekit_1 =new FileKit($(".upload_kit_wrap_1"));
            var $previewView_1 = $(".preview_1");
            filekit_1.bind("selected",function(){fileSelectHandler(filekit_1,$previewView_1);});
            //2
            var filekit_2 =new FileKit($(".upload_kit_wrap_2"));
            var $previewView_2 = $(".preview_2");
            filekit_2.bind("selected",function(){fileSelectHandler(filekit_2,$previewView_2);});
            //3
            var filekit_3 =new FileKit($(".upload_kit_wrap_3"));
            var $previewView_3 = $(".preview_3");
            filekit_3.bind("selected",function(){fileSelectHandler(filekit_3,$previewView_3);});
            //4
            var filekit_4 =new FileKit($(".upload_kit_wrap_4"));
            var $previewView_4 = $(".preview_4");
            filekit_4.bind("selected",function(){fileSelectHandler(filekit_4,$previewView_4);});
            //5
            var filekit_5 =new FileKit($(".upload_kit_wrap_5"));
            var $previewView_5 = $(".preview_5");
            filekit_5.bind("selected",function(){fileSelectHandler(filekit_5,$previewView_5);});
            //6
            var filekit_6 =new FileKit($(".upload_kit_wrap_6"));
            var $previewView_6 = $(".preview_6");
            filekit_6.bind("selected",function(){fileSelectHandler(filekit_6,$previewView_6);});
            //7
            var filekit_7 =new FileKit($(".upload_kit_wrap_7"));
            var $previewView_7 = $(".preview_7");
            filekit_7.bind("selected",function(){fileSelectHandler(filekit_7,$previewView_7);});
            //8
            var filekit_8 =new FileKit($(".upload_kit_wrap_8"));
            var $previewView_8 = $(".preview_8");
            filekit_8.bind("selected",function(){fileSelectHandler(filekit_8,$previewView_8);});
            //9
            var filekit_9 =new FileKit($(".upload_kit_wrap_9"));
            var $previewView_9 = $(".preview_9");
            filekit_9.bind("selected",function(){fileSelectHandler(filekit_9,$previewView_9);});
            //10
            var filekit_10 =new FileKit($(".upload_kit_wrap_10"));
            var $previewView_10 = $(".preview_10");
            filekit_10.bind("selected",function(){fileSelectHandler(filekit_10,$previewView_10);});




        });