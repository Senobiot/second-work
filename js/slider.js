$(document).ready(function(){
	let viewport=Math.round($(".slider").width());
	let slides=$(".slider-container").children("img");
	let slides_qty=slides.length;
	let lent=slides_qty*viewport;
	let translate=0;
	let num_slide=0;
	let text_slides=$(".portfolio-page__projects").children(".project-description");
	let num_text_slide=0;
	let rhombus=$(".rhombus").width();
	let sl_blog_viewport=$(".slider-blog").width();
	$(".rhombus").css("height", rhombus);


	$(".slider-container").css("width", lent);
	$(".slider-container img").css("width", viewport);


	$(window).resize(function(){
		viewport=Math.round($(".slider").width());
		lent=slides_qty*viewport;
		$(".slider-container").css("width", lent);
		$(".slider img").css("width", viewport);
		translate=viewport*num_slide;
		$(".slider-container").css("transform", "translate(-"+translate+"px)");
		rhombus=Math.round($(".rhombus").width());
		$(".rhombus").css("height", rhombus);
		// $(".rhombus:after").css("font-size", 0.2*rhombus);
	})

		for (i=0; i < slides_qty; i++) {
			if (i==0){
			$(".slider .dots").append("<div class='dot active'></div>");
			} else {
			$(".slider .dots").append("<div class='dot'></div>");
			}
		}

		let dots=$(".dots").children(".dot");

	$(".dot").click(function(){
		$(".dots .active").removeClass("active");
		$(this).addClass("active");
		num_slide=$(this).index();
		translate=num_slide*viewport;
		$(".slider-container").css("transform", "translate(-"+translate+"px)");
	})

	$(".slider-arrowR").click(function(){
		if (translate<lent-viewport){
			translate+=Math.round(viewport);
			$(".slider-container").css("transform", "translate(-"+translate+"px)");
			$(".dots .active").removeClass("active");
			$(dots[++num_slide]).addClass("active");
			$(text_slides[num_text_slide]).css("display", "none");
			$(text_slides[++num_text_slide]).fadeIn('slow');
		} else {
				$(".slider-container").css("transform", "translate(0)")
				$(".dots .active").removeClass("active");
				$(dots[num_slide=0]).addClass("active");
				translate=0;
				$(text_slides[num_text_slide]).css("display", "none");
				num_text_slide=0;
				$(text_slides[num_text_slide]).fadeIn('slow');

		}
	})

		$(".slider-arrowL").click(function(){
			if (translate>0){
			translate-=Math.round(viewport);
			$(".slider-container").css("transform", "translate(-"+translate+"px)");
			$(".dots .active").removeClass("active");
			$(dots[--num_slide]).addClass("active");
			$(text_slides[num_text_slide]).css("display", "none");
			$(text_slides[--num_text_slide]).fadeIn('slow');
			} 
			else {
				translate=lent-viewport;
				$(".slider-container").css("transform", "translate(-"+translate+"px)");
				$(".dots .active").removeClass("active");
				$(dots[dots.length-1]).addClass("active");
				num_slide=dots.length-1;
				$(text_slides[num_text_slide]).css("display", "none");
				num_text_slide=text_slides.length-1;
				$(text_slides[text_slides.length-1]).fadeIn('slow');
			} 
		})

		$(".portfolio-menu .button_web").click(function(){
			$(".rhombus").removeClass("active");
			$(".rhombus").not(".web").addClass("active");
		})
		$(".portfolio-menu .button_coding").click(function(){
			$(".rhombus").removeClass("active");
			$(".rhombus").not(".coding").addClass("active");
		})
		$(".portfolio-menu .button_photography").click(function(){
			$(".rhombus").removeClass("active");
			$(".rhombus").not(".photo").addClass("active");
		})
		$(".portfolio-menu .button_freebes").click(function(){
			$(".rhombus").removeClass("active");
			$(".rhombus").not(".freebes").addClass("active");
		})
		$(".portfolio-menu .button_all").click(function(){
			$(".rhombus").removeClass("active");
		})
		let Lpos;
		let sl_blog_qnty=$(".slider-blog_wrapper").children(".slider-blog__element").length;
		let sl_blog_sl_width=$(".slider-blog__element img").width();
		let margin=parseInt($(".slider-blog__element").css("margin-right"));
		let sl_blog_wrapper=(sl_blog_sl_width+margin)*sl_blog_qnty;
		$(".slider-blog_wrapper").css("width", sl_blog_wrapper);
		Lpos=$(".blog_slider_thumbler").position().left;
		let ats=(sl_blog_wrapper/2-sl_blog_viewport/2)/Lpos;

		$(".blog_slider_thumbler").draggable({
		containment:'parent',
		drag: function(event, ui) {
			
			Lpos=ui.position.left;
			let sl_blog_pos=-Lpos*ats;
			$(".slider-blog_wrapper").css("transform", "translate("+sl_blog_pos+"px)");
		 }
		 });
		let text_slider=$(".text-slider").children(".citation");
		let text_slider_index=0;
		$(text_slider[text_slider_index]).fadeIn("slow");
		$(".citation__arrowR").click(function(){
			if (text_slider_index<(text_slider.length-1)) {
			$(text_slider[text_slider_index]).css("display", "none");
			$(text_slider[++text_slider_index]).fadeIn("slow");
		} else {
			$(text_slider[text_slider_index]).css("display", "none");
			text_slider_index=0;
			$(text_slider[0]).fadeIn("slow");
		}
	});
			$(".citation__arrowL").click(function(){
			if (text_slider_index>0) {
			$(text_slider[text_slider_index]).css("display", "none");
			$(text_slider[--text_slider_index]).fadeIn("slow");
		} else {
			$(text_slider[text_slider_index]).css("display", "none");
			text_slider_index=text_slider.length-1;
			$(text_slider[text_slider.length-1]).fadeIn("slow");
		}
	});
			//<<--------------слайдинг по меню------------->>//
			$(".main-page__menu a").click(function(event){
				event.preventDefault();
				let id=$(this).attr("href");
				let scroll=$(id).offset().top;
				$("body, html").animate({scrollTop: scroll}, 1000);
			})

			$(window).scroll(function(){
				let scroll=$(window).scrollTop();
				if (scroll>1200) {
					$(".home_arrow ").show("slow");
				}	else {
					$(".home_arrow ").hide("slow");
				}
			})

			$(".home_arrow").click(function(){
				$("body, html").animate({scrollTop:0}, 1000);
			})
})