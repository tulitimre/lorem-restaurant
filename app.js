window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(document).ready(function () {
  $("#myBtn2").click(function () {
    $(".teljes-kep").css({
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'center'
    });
    $("body").css({
      'overflow': 'hidden'
    });

    $("#myBtn3").click(function (e) {
      $(".teljes-kep").css({
        'display': 'none',
      });
      $("body").css({
        'overflow': 'unset'
      });
    });
  });
});

var images = ["img/kep3.jpeg", "img/kep4.jpg", "img/kep5.jpg", "img/kep6.jpg", "img/kep7.jpg", "img/kep8.jpg", "img/kep9.jpg", "img/kep1.jpeg", "img/kep2.jpg"];
var i = 0;
$(document).ready(function () {
  $(".vissza").click(function () {
    if (i <= 0) i = images.length;
    i--;
    $(".valtozoKepek").attr('src', images[i]);
  });

  $(".elore").click(function () {
    if (i >= images.length - 1) i = -1;
    i++;
    $(".valtozoKepek").attr('src', images[i]);
  });
});

$(document).ready(function () {
  $(".Leves").click(function () {
    $(".foetelDiv").css({ 'display': 'none' });
    $(".salataDiv").css({ 'display': 'none' });
    $(".pizzaDiv").css({ 'display': 'none' });
    $(".desszertDiv").css({ 'display': 'none' });
    $(".levesDiv").css({ 'display': 'flex' });
  });
  $(".Pizza").click(function () {
    $(".foetelDiv").css({ 'display': 'none' });
    $(".salataDiv").css({ 'display': 'none' });
    $(".pizzaDiv").css({ 'display': 'flex' });
    $(".desszertDiv").css({ 'display': 'none' });
    $(".levesDiv").css({ 'display': 'none' });
  });
  $(".Foetel").click(function () {
    $(".foetelDiv").css({ 'display': 'flex' });
    $(".salataDiv").css({ 'display': 'none' });
    $(".pizzaDiv").css({ 'display': 'none' });
    $(".desszertDiv").css({ 'display': 'none' });
    $(".levesDiv").css({ 'display': 'none' });
  });
  $(".Salata").click(function () {
    $(".foetelDiv").css({ 'display': 'none' });
    $(".salataDiv").css({ 'display': 'flex' });
    $(".pizzaDiv").css({ 'display': 'none' });
    $(".desszertDiv").css({ 'display': 'none' });
    $(".levesDiv").css({ 'display': 'none' });
  });
  $(".Desszert").click(function () {
    $(".foetelDiv").css({ 'display': 'none' });
    $(".salataDiv").css({ 'display': 'none' });
    $(".pizzaDiv").css({ 'display': 'none' });
    $(".desszertDiv").css({ 'display': 'flex' });
    $(".levesDiv").css({ 'display': 'none' });
  });
});

function megnyitMenu() {
  document.getElementById("elojon").style.width = "100%";
  document.body.style.overflowY = "hidden";

}
function bezarMenu() {
  document.getElementById("elojon").style.width = "0%";
  document.body.style.overflowY = "unset";


}

$(document).ready(function () {
  $(".EtelKep").click(function (e) {
    $(".teljes-kep-etel").css({
      'display': 'flex',
      'align-items': 'center',
      'justify-content': 'center'
    });
    $(this).addClass("Kivalasztott");
    $(".adatok-etel h1").text($(".Kivalasztott .nevp").text());
    $(".adatok-etel .ar-etel").text($(".Kivalasztott div").text());
    $(".adatok-etel .leiras-etel").text($(".Kivalasztott .leirasp").text());
    var imgSrc = $(".Kivalasztott img").attr('src');
    $(".adatok-etel img").attr('src', imgSrc);
    $(this).removeClass("Kivalasztott");
    $("body").css({
      'overflow': 'hidden'
    });
  });
  $("#myBtn4").click(function (e) {
    $(".teljes-kep-etel").css({
      'display': 'none',
    });
    $("body").css({
      'overflow': 'unset'
    });
  });
});

var nameReg = /^[A-Za-z]+$/;
var numberReg = /^[0-9]+$/;
var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
$(document).ready(function () {
  $(".submit").click(function () {
    var feltetel = true;
    var nev = $("#formNev").val();
    var emil = $("#formEmail").val();
    var telefon = $("#formTelefon").val();
    var uzenet = $("#formUzenet").val();
    for (var i2 = 0; i2 < 4; i2++) {
      if (feltetel) {
        switch (i2) {
          case 0:
            if (nev == "" || !nameReg.test(nev)) {
              alert("A nev nem megfelelő!");
              feltetel = false;
            }
            break;
          case 1:
            if (emil == "" || !emailReg.test(emil)) {
              alert("Az email nem megfelelő!");
              feltetel = false;
            }
            break;
          case 2:
            if (telefon == "" || !numberReg.test(telefon)) {
              alert("A telefonszám nem megfelelő!");
              feltetel = false;
            }
            break;
          case 3:
            if (uzenet == "") {
              alert("Nem irt semmit az üzenet mezőbe!");
              feltetel = false;
            }
            break;
        }
      } else {
        break;
      }
    }
    if (feltetel) {
      alert("Üzenet elküldve!");
      $(".teljes-kep").css({
        'display': 'none',
      });
      $("body").css({
        'overflow': 'unset'
      });
      $("#formNev").val("");
      $("#formEmail").val("");
      $("#formTelefon").val("");
      $("#formUzenet").val("");
    }
  });
});
