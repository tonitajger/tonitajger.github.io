$(document).init(function() {
  $(".img-circle").click(function() {
    $("#hidden-bubble").css("filter","opacity(100%)");
    setTimeout(function() {
      $("#hidden-bubble").css("filter","opacity(0%)");
    }, 3000);
  })
  $("#top-link").click(function() {
    $('html, body').animate({
    scrollTop: $("#top").offset().top
    }, 300);
  })
  $("#project-link").click(function() {
    $('html, body').animate({
    scrollTop: $("#projects").offset().top
    }, 300);
  })
  $("#about-link").click(function() {
    $('html, body').animate({
    scrollTop: $("#about").offset().top
    }, 300);
  })
  $("#resume-link").click(function() {
    $('html, body').animate({
    scrollTop: $("#resume").offset().top
    }, 300);
  })
  /*elmnt.scrollIntoView();*/
})
