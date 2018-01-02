$(document).ready(function() {
  $(".circles-item").click(function () {
    $(this).toggleClass('active');
    if ($(".circles-item").hasClass('active')) {
      $(".btn-next").addClass('show');
    } else {
      $(".btn-next").removeClass('show');
    }
  });
  $('.interest-cards').masonry({
  itemSelector: '.interest-cards__item',
  columnWidth: 268,
  gutter: 16
});
});
