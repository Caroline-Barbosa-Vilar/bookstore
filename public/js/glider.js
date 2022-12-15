document.querySelectorAll('.glider').forEach((element, index) => {
  new Glider(element, {
    slidesToShow: 4,
    slidesToScroll: 2,
    draggable: true,
    dots: '#dots' + index,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  })
});