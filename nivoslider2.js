jQuery.noConflict();

(function( jQuery ) {

jQuery(window).load(function() {
    jQuery('#slider').nivoSlider({
			effect:'fade', //Specify sets like: 'random,fold,fade,sliceDown'
			// All effects:
			// sliceDown, sliceDownLeft, sliceUp, sliceUpLeft, sliceUpDown
			// sliceUpDownLeft, fold, fade, random, slideInRight,
			// slideInLeft, boxRandom, boxRain, boxRainReverse, boxRainGrow
			// boxRainGrowReverse
			animSpeed:500, //Slide transition speed
			pauseTime:3000,
			startSlide:0, //Set starting Slide (0 index)
			directionNav:false, //Next and Prev
			directionNavHide:true, //Only show on hover
			controlNav:false, //1,2,3...
			controlNavThumbs:false, //Use thumbnails for Control Nav
			controlNavThumbsFromRel:false, //Use image rel for thumbs
			controlNavThumbsSearch: '.jpg', //Replace this with...
			controlNavThumbsReplace: '_thumb.jpg', //...this in thumb Image src
			keyboardNav:false, //Use left and right arrows
			pauseOnHover:false, //Stop animation while hovering
			manualAdvance:false, //Force manual transitions
			captionOpacity:0.8, //Universal caption opacity
			beforeChange: function(){},
			afterChange: function(){},
			slideshowEnd: function(){} //Triggers after all slides have been shown
    });
});

})( jQuery);	