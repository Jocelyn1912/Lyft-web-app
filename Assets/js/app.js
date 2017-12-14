/*
*Función principal
*/
$(document).ready(function(){
  /*
  *Función jQuery que permite que se ejecute Splash Screen
  */
  $('.splash-screen').fadeOut(4000);
  /*
  *Función desplazamiento a la siguiente vista
  */
  $("#netx1").click(function(){
    $('.auto-lyft').addClass('hidden');
    $('.numero-telefonico').removeClass('hidden');
  });

  $("#next2").click(function(){
    $('.numero-telefonico').addClass('hidden');
    $('.verify-phone-number').removeClass('hidden');
  });

  $("#next3").click(function(){
    $('.verify-phone-number').addClass('hidden');
    $('.register').removeClass('hidden');
  });

  $(".next-end").click(function(){
    $('.register').addClass('hidden');
    $('.end').removeClass('hidden');
  });
});