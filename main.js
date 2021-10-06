function showTime()
{
  var date = new Date() ;
  var h = date.getHours() ;
  var m = date.getMinutes() ;
  var s = date.getSeconds() ;

  h = ( h < 10 ) ? "0" + h : h ;
  m = ( m < 10 ) ? "0" + m : m ;
  s = ( s < 10 ) ? "0" + s : s ;

  document.getElementById( "MyClockDisplay" ).innerText = ` ${ h }:${ m }:${ s } ` ;

  setTimeout( showTime , 1000 ) ;
}

showTime() ;