/*
*	Author: Thomas Brodusch 
*	Version: 1.1.0 "Ara Ararauna"  
*	Release date: 13/11/14
*	Repo: https://github.com/tom4dev/YACo/
* 	Issues: https://github.com/tom4dev/YACo/issues
*	License: MIT
* 	Make with <3 ! 
*/
(function ( $ ) {
	$.fn.yaco = function(options) {
	/*** Utils functions ***/
		var isOnTop = function(divYaco, yaco_config){
			var distance = $(divYaco).offset().top,
		    $window = $(window);
			$window.scroll( function() {
				if ( $window.scrollTop() >= distance && $window.scrollTop() < distance + 50 ) {
			        // Your div has reached the top
			        // Load the associate specific color.
					yaco_config.loadedColor = $(divYaco).attr('data-yaco-color');
					//YacOoo !
			       	applyColor();
			    }
			});
		}

		var applyColor = function(){
			// Change color for each type!
			for (var key in yaco_config.change) {
				$(yaco_config.calledObj).css( yaco_config.change[key] , yaco_config.loadedColor );	
			};
		}

	/*** Config ***/
		var yaco_config = $.extend({
			calledObj: this,
			change: ['background'],
			default: true,
			colors: [
				'#1abc9c',
				'#16a085',
				'#3498db',
				'#9b59b6',
				'#34495e',
				'#e67e22',
				'#8E44AD',
				'#875F9A', 
				'#F47983', 
				'#C93756',
				'#044F67', 
				'#1F4788',
				'#6C7A89'
			],
			loadedColor : '',
			random: false,
			excludes: false,
			delay: 0.7,
			transition: 'ease' 
		}, options);


	/**** Core engine ***/
	
		// Set config for transition
		this.css( "transition", yaco_config.change +' '+ yaco_config.delay +'s '+ yaco_config.transition );

		/* 	If yaco_config.default == true 
		* 	default: user wants to change color on reach specific div
		*/
		if (yaco_config.default == true && $(document).find('[data-yaco=true]').length > 0){
			
			/* 	Foreach found div[data-yaco=true], check if is on top
			*	if yes: apply the color stored in [data-yaco-color] !
			*/
			$(document).find('[data-yaco=true]').each(function(){ 
				isOnTop(this, yaco_config);
			});
			
		}else{
			// Set color 
			if(typeof(yaco_config.colors) == 'object'){
				 yaco_config.loadedColor = yaco_config.colors[Math.floor((Math.random() * yaco_config.colors.length) + 0)];
			}
			if(yaco_config.random == true) yaco_config.loadedColor = '#'+Math.floor(Math.random()*16777215).toString(16);	
			applyColor();
		}
		
		


		
	};
}( jQuery ));