function AnimSprites(animClass){

	var myObject = document.querySelector("."+animClass);
	myObject.style.backgroundImage = "url("+myObject.getAttribute("sprite-img")+")";
	
	myObject.fast = 500;

	var image = new Image();
	image.src = myObject.style.backgroundImage.replace(/url\(|\)$/ig, '');

	if(myObject.getAttribute("sprite-column") != "" || myObject.getAttribute("sprite-column") != undefined ){
		myObject.nbColumn = myObject.getAttribute("sprite-column");
	}else{
		myObject.nbColumn = 1;
	}

	if(myObject.getAttribute("sprite-line") != "" || myObject.getAttribute("sprite-line") != undefined ){
		myObject.nbLine = myObject.getAttribute("sprite-line");
	}else{
		myObject.nbLine = 1;
	}

	if(myObject.getAttribute("sprite-fast") != "" || myObject.getAttribute("sprite-fast") != undefined ){
		myObject.fast = parseInt( myObject.getAttribute("sprite-fast") );
	}

	myObject.style.backgroundSize = 100*myObject.nbColumn+"% "+(100*myObject.nbLine)+"%" ;

	myObject.BGPX = 0;
	myObject.BGPY = 0;
	myObject.time = 0;

	myObject.Loop = function(){

		if(Date.now() > myObject.time + myObject.fast){
			myObject.time = Date.now();

			if(myObject.BGPX == undefined || myObject.BGPX >= 100){
				myObject.BGPX = 0;
			} else {
				myObject.BGPX += 100 / (myObject.nbColumn-1);
			}

			myObject.style.backgroundPositionX = myObject.BGPX+"%";
		}

		if(myObject.autorun == true){
			requestAnimationFrame(myObject.Loop);
		}		
	}

	if( myObject.getAttribute("sprite-autorun") == true){
		myObject.autorun = true;
	}

	if(myObject.autorun == true){
		myObject.Loop();
	}		


}

function StopAnimSprites(animClass){
	var myObject = document.querySelector("."+animClass);
	myObject.autorun = false;
}

function StartAnimSprites(animClass){
	var myObject = document.querySelector("."+animClass);
	myObject.autorun = true;
	AnimSprites(animClass);
}


if (!window.requestAnimationFrame) 
{
	window.requestAnimationFrame = ( function()
	{
		return window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function(  callback, element )
		{				
			window.setTimeout( callback, 1000 / 40 );
		};
	}
	)();
}
