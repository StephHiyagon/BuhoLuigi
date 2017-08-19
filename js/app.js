$('.navbar').hide();

//evento scroll
function moveScroll(event){
  var scroll=window.pageYOffset || document.body.scrollTop;
  var boton1=document.getElementsByClassName('icono')[0];
  var boton2=document.getElementsByClassName('icono')[1];
  var boton2=document.getElementsByClassName('icono')[2];
  if(scroll>=160){

  }else{

  }
}

window.addEventListener('scroll',moveScroll);
