$(document).ready(function () {
  // your code
  var window = $(window);


  $('#parallax').parallax({
    invertX: true,
    invertY: true,
    scalarX: 10,
    frictionY: .1
  });
  $(".humburger").click(function () {
    $(".side-navigation").toggleClass("side-nav-active");
    $(".humburger").toggleClass("humburger2");
    $(".whole-content-wrapper").toggleClass("blur-filter");
  });
  $(".side-navigation ul").click(function () {
    $(".side-navigation").toggleClass("side-nav-active");
  $(".humburger").toggleClass("humburger2");
  $(".whole-content-wrapper").toggleClass("blur-filter");
  
  });
})