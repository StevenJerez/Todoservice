$(".circles-item").click(function () {
  $(this).toggleClass('active');
  if ($(".circles-item").hasClass('active')) {
    $(".btn-next").addClass('show');
  } else {
    $(".btn-next").removeClass('show');
  }
});
