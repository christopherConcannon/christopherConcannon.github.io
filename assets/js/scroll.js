$(window).scroll(function() {
  if ($(this).scrollTop() > 44) {
    $("#navbar").addClass("faded-header");
  } else {
    $("#navbar").removeClass("faded-header");
  }
});
