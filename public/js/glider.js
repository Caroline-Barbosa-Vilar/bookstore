document.querySelectorAll('.glider').forEach(element => {
  new Glider(element, {
    slidesToShow: 5,
    slidesToScroll: 2,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  })
});