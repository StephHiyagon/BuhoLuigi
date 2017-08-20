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

var boton1=document.getElementsByClassName('js-iconos')[0];
var buho=document.getElementsByClassName('img-cambia')[0];
var text=document.getElementsByClassName('textPrinc')[0];
var text1=document.getElementsByClassName('text')[0];
var item=document.getElementsByClassName('nav-item');
//funciones
function portada(){
  setTimeout(function(){
    boton1.style.display="block";
    buho.classList.add('flex1');
    text.classList.add('flex');
    text1.style.display="none";
    $('.coo').fadeIn('slow');
    setTimeout(function(){
      $('.abs').fadeIn('slow');
    },1500);
  }, 2000);
}

portada();


function moveScroll(event){
  var scroll=window.pageYOffset || document.body.scrollTop;
  console.log(scroll);

  if(scroll<1){
    $('.msj').hide();
    $('.coo').hide();
    $('.abs').hide();
    boton1.style.display="none";
    buho.classList.remove('flex1');
    text.classList.remove('flex');
    text1.style.display="inline-block";
    portada();
  }

  if(scroll>=636){
    $('.navbar').fadeIn('slow');
    console.log(item[0]);
    item[0].style.color="red";
    item[1].style.color="gray";
    item[2].style.color="gray";
  }

  if(scroll>=1348){
    item[0].style.color="gray";
    item[1].style.color="blue";
    console.log(item[1]);
  }

  if(scroll>=2036){
    item[1].style.color="gray";
    item[2].style.color="yellow";
  }

  if(scroll<636){
    $('.navbar').fadeOut('slow');
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

$('.js-iconos a').on("click", function(e) {
   e.preventDefault();
    var target ='#'+ $(this).attr("role-link");
    $('html,body').animate({scrollTop: $(target).offset().top},1200);
    return false;
   });

 $('header li').on("click", function(e) {
   e.preventDefault();
    var target ='#'+ $(e.target).attr("role-data");
    $('html,body').animate({scrollTop: $(target).offset().top}, 1200);
    return false;

   });

//llamada de eventos
window.addEventListener('scroll',moveScroll);
span.addEventListener('click',cerrar);
