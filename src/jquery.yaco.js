(function ( $ ) {
	$.fn.yaco = function(options) {
		var yaco_config = $.extend({
			change: 'background',
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
			delay: '0.7s',
			transition: 'ease' 
		}, options);


		// Set config for transition
		this.css( "transition", yaco_config.change +' '+ yaco_config.delay +' '+ yaco_config.transition );
		
		// Set color 
		if(typeof(yaco_config.colors) == 'object'){
			 yaco_config.loadedColor = yaco_config.colors[Math.floor((Math.random() * yaco_config.colors.length) + 0)];
		}
		if(yaco_config.random == true) yaco_config.loadedColor = randomColor();	


		// Change color !
		this.css( yaco_config.change , yaco_config.loadedColor );	
	};
}( jQuery ));