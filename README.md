# AnimSprites
plugin to create an animation from a sprite

AnimSprites is a pluggin using vanilla js, who create an animation with a sprite sheet

For customize your animation you must use:
  - sprite-img : (required) sprit sheet's url (png, jpg or gif).
  - sprite-column : (required) number of elements contain in image's width. (default 1)
  - sprite-autorun : (optional) boolean for animation trigger. (default false)
  - sprite-fast : (optional) animation fast in millisecond. (default 500)
  
  div class="myDiv" sprite-img="image.png" sprite-column="6" sprite-autorun="false" sprite-fast="200" onmouseover="StartAnimSprites('myDiv')" onmouseout="StopAnimSprites('myDiv')"> </div



	AnimSprites("myDiv");

