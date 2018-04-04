$(function(){
	$('#fullpage').fullpage({
		css3: true,
		afterLoad: function (anchorLink, index) {

			$('.section').removeClass('current');
				
				// 延时100毫秒执行
				setTimeout(function () {
					$('.section').eq(index - 1).addClass('current');
				}, 100);
				
				
			},
			onLeave: function (index, nextIndex, direction) {
				if(index==1){
					$('.brwser').css({"transform":"perspective(875px) rotateX(0) translateY(300px) translate3d(0,0,0)","transition":"all 1s"});
//					$('.browser_bg').css({"transform":"translate(0,300px)","opacity":1,"transition":"all 3s"});
				}
			}
		});
});