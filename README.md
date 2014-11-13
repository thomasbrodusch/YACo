# YACo - Yes Another COlor !
[![npm version](https://badge.fury.io/js/yaco.svg)](http://badge.fury.io/js/yaco)

Change background / color / border on scroll and more !

Just a simple and light background/color/border changer jQuery plugin.

![ScreenShot](http://rawgithub.com/tom4dev/YACo/gh-pages/logo.png)




[Just try it](http://tom4dev.github.io/YACo)


Author: Thomas Brodusch

Version
---------
1.1.0 "Ara Ararauna" - (13 november 2014)

Workflow
----------
	## 1.1.0 - "Ara Ararauna"
		- Optional linking colors to particular elements. When you reach a certain div, the background color change ! 
		you can define a div by add in html markup of the specific div: 'data-yaco=true' (and associate a color) 'data-color-yaco="#22A7F0" '

Installation
-------------
> 1. Load **jQuery**
	
> 2. Load **YACo.js**

>``npm install yaco``

```html
	<script src="../src/jquery.yaco.js"></script>
```

> 3. Define your "YACo div" (don't forget to set "data-yaco" at "true", and define a color of your choice in "data-yaco-color" !)
```html
 <div id="firstDiv" data-yaco="true" data-yaco-color="#22A7F0"></div>
 <div id="secondDiv" data-yaco="true" data-yaco-color="#6C7A89"></div>
```

> 4.Let **YACo do the rest !**
```html
<script type="text/javascript">
	/*  Default behaviour of YACo - Change current page's background-color when reach specific div on scroll !
    *   Works with data attributes in html markup, easy as 1,2,3 !
    *   Be sure you have defined a yaco div to reach. (ex: [data-yaco="true"] )
    *   Be sure you have defined the changed color when the div is reach. (ex: [data-yaco-color="black"])
    */
        $('html').yaco();
	/* If you want to use YACo with some specifics options, on a specific element:
	*	DON'T FORGET to set 'default' parameter to 'false'
	*/
			$('#anotherDiv').yaco({
				default: false,
				change: ['border','color'],
				colors: ['#3498db','#9b59b6','#34495e'],
				delay: 0.8,
				transition: 'ease'
			});
	</script>
```


Options
-----------
> **default**: (boolean) - Enable/disable default behaviour of YACo.

>> (ex:false)

> **change**: (array) - Apply the change on background/color/border 
			
>> (ex:['background', 'border'])
	
>**colors**: (array) - Pass the set of colors you want to use 
			
>>(ex: ['#1abc9c','#16a085','#3498db'])

>**excludes**: (array) - You want to excludes some colors
>>(ex: ['#1abcd4','#16a085'])

>**delay**: (float) 
>>(ex: 0.7)

>**transition**: (string) - Css transition 
>> (ex:'ease')

>**random**: (boolean) - You want a random set of colors ? Set it to true.
>>(ex: true)


	