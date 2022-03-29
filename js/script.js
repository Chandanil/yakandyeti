  $(document).ready(function(){
  	$(function(){
  		$('.search_btn').on('click',function(){
  			$(".search_open, .search_close").toggleClass("search_open search_close");
  			$('.search').toggleClass('search_active');
  			$('.go_btn').toggleClass('search_active_go_btn');
        $('.search_container').toggleClass('show');
  		});
  	});
  	$(".dropdown").on("click", function () {
  		$(this).next().next().next().toggleClass("show");
  		$(this).toggleClass("dropdown-show");
  	});
  		$(".menu-btn").on("click", function(){
		$('.custom-collapsed').toggleClass('show');
		$(this).toggleClass("toggle");
	});
  	$('body').click(function(event) {
  		if(!$(event.target).closest('.custom-collapsed').length && !$(event.target).closest('.menu-btn').length) {        
  			$('.custom-collapsed').removeClass('show'); 
  			$('.menu-btn').removeClass('toggle'); 
  		} 
  	});
  });

