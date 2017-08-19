$('.navbar').hide();
$('.js-iconos').hide();
$('.coo').hide();
$('.abs').hide();
$('.msj').hide();

//obtener elementos

var mensaje = document.getElementsByClassName('msj')[0];
var play=document.getElementsByClassName('img-cambia')[0];
var span = document.getElementById("close");
var modal = document.getElementById('myModal');
var body=document.getElementsByTagName('body')[0];

//funciones

function moveScroll(event){
  var scroll=window.pageYOffset || document.body.scrollTop;
  var boton1=document.getElementsByClassName('js-iconos')[0];
  var buho=document.getElementsByClassName('img-cambia')[0];
  var text=document.getElementsByClassName('textPrinc')[0];
  var text1=document.getElementsByClassName('text')[0];

  if(scroll>=10){
    boton1.style.display="block";
    buho.classList.add('flex1');
    text.classList.add('flex');
    text1.style.display="none";
    $('.coo').fadeIn('slow');
    setTimeout(function(){
      $('.abs').fadeIn('slow');
    },1000);
  }else{
    $('.msj').hide();
  }
}

$('.abs').on('click', function(){
  $('.coo').hide();
  $('.abs').hide();
  $('.msj').fadeIn('slow');
})

mensaje.addEventListener('click', function(e){
  e.target.style.display="none";
  $('.coo').fadeIn('slow');
  setTimeout(function(){
    $('.abs').fadeIn('slow');
  },1000);
});


play.addEventListener('click',function (e){
  e.preventDefault();
  console.log(e.target);
  console.log(e.currentTarget);
  console.log(e.target.nextElementSibling);

  if(e.target.className == "top"){
    console.log('entre');
    var modalImg = document.getElementById("img01");
    modal.style.display="block";
    body.style.overflow="hidden";
  }
});

function cerrar (event){
  event.preventDefault();
    modal.style.display="none";
    body.style.overflow="auto";
  }

//llamada de eventos
window.addEventListener('scroll',moveScroll);
span.addEventListener('click',cerrar);
