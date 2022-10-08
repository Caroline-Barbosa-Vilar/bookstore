document.querySelectorAll('.glider').forEach((element, index) => {
  new Glider(element, {
    slidesToShow: 5,
    slidesToScroll: 2,
    draggable: true,
    dots: '#dots' + index,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  })
});