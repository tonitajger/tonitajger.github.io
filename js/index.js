$(document).init(function() {
  $(".img-circle").click(function() {
    $("#hidden-bubble").css("filter","opacity(100%)");
    setTimeout(function() {
      $("#hidden-bubble").css("filter","opacity(0%)");
    }, 3000);
  })
})
