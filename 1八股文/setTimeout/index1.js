/*
  In latest FF and Chrome browsers, UI events like mousemove are being throttled by the UA.
  (as recommended by the specs)
  They make the limit rate match the one of the screen-refresh, like resize or scroll events.
  However, at least in Firefox they don't make it part of the 'update the rendering' algorithm,
  but execute it as a normal task.
  So a 'mousemove' event in this browser actually gives us accesss to the first step of a 'rendering frame'.
  
  This simple snippet tries to demonstrate that,
  if successful, "rAF" should always be logged first.
*/
onmousemove = (evt) => {
  console.clear();
  setTimeout( () => console.log( 'timeout' ), 0 );
  requestAnimationFrame( () => console.log( 'rAF' ) );
};