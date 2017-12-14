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
  /*
  *Función desplazamiento a la vista anterior
  */
  $("#previous").click(function(){
    $('.numero-telefonico').addClass('hidden');
    $('.auto-lyft').removeClass('hidden');
  });

  $("#previous1").click(function(){
    $('.verify-phone-number').addClass('hidden');
    $('.numero-telefonico').removeClass('hidden');
  });

  $("#previous2").click(function(){
    $('.register').addClass('hidden');
    $('.verify-phone-number').removeClass('hidden');
  });
  /*
  *Función que me dá el código LAB
  */
  $("#codigo, #codigo-nuevo").click(function(){
    var codigo = "";
    var str = "123456789";
    var frase = "Tu código LAB es "
    for (var i = 0; i < 3; i++){
      codigo += str.charAt(Math.floor(Math.random() * str.length));
    };
    alert (frase + codigo);
  });


});

