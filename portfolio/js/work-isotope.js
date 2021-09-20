var $grid = $('.grid-work').masonry({
  itemSelector: '.grid-projet',
  columnWidth: 160,
  stagger: 15,
  percentPosition: true
});

$grid.on('click', '.grid-projet', function () {
  // change size of projet via class
  $(this).toggleClass('grid-projet--gigante',);
  // trigger layout
  $grid.masonry();
});

