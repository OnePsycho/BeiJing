    $(function(){
    	$('.third').on('mouseover',function(){
    		$('.third').addClass('third-active').text("立体");
    	})
    	$('.third').on('mouseout',function(){
    		$('.third').removeClass('third-active').text("平面");
    	})
    	$('.third').on('click',function(){
    		$('.third').css('display','none');
    		$('.third-select').css('display','block');
    		$('.third-select').addClass('animated slideInRight');
    	})
    	$('.third-select-item').on('mouseover',function(){
    		$(this).addClass('third-item-active');
    	})
    	$('.third-select-item').on('mouseout',function(){
    		$(this).removeClass('third-item-active');
    	})
    	
    	
    	//方案 施工图切换
    	$('.nav-pills-left>li').on('click',function(){
    		$('.nav-pills-left>li').not(this).removeClass('active');
    		$(this).addClass('active');
    	})
    	
    	$('.nav-pills-right>li').on('click',function(){
    		$('.nav-pills-right>li').not(this).removeClass('active');
    		$(this).addClass('active');
    		
    	})
    });