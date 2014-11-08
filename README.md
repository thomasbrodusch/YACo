# YACo - Yes Another COlor !
Light & simple background/color/border changer jQuery plugin ! 

Contributor: Thomas Brodusch

Version
---------
0.0.1

Installation
-------------
> 1. Load **jQuery**
	
> 2. Load **YACo.js**
```html
	<script src="../src/jquery.yaco.js"></script>
```

> 3.Let **YACo do the rest !**
```html
<script type="text/javascript">
		// Default background-color change when scroll with nice random Flat colours !
		$(document).scroll(function(){
        	$('html').yaco();
        });

		// With some options on a specific element
			$('#anotherDiv').yaco({
				change: 'background',
				colors: ['#3498db','#9b59b6','#34495e'],
				delay: '0.8s',
				speed: 'ease'
			});
	</script>
```


Options
-----------
> **change**: (string) - Apply the change on background/color/border 
			>> (ex:'background')
	
>**colors**: (array) - Pass the set of colors you want to use 
			>>(ex: ['#1abc9c','#16a085','#3498db'])

>**excludes**: (array) - You want to excludes some colors
	>>(ex: ['#1abcd4','#16a085'])

>**delay**: (float) 
	 >>(ex: 0.7)

>**speed**: (string) - Type of css transition 
	>> (ex:'ease')

>**random**: (boolean) - You want a random set of colors ? Set it to true.
	>>(ex: true)
			
	