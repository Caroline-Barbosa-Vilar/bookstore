$(document).ready(function() {
  var books;
  $.ajax({
    url:"books.json",
  }).done(function(data){
    books = data.books;
    let div = $('#content');

    for(let i = 0;i <= books.length; i++){
      $(div).append(`
        <div class="card">
          <img src="${books[i].img}">
        </div>  
      `)
    }
  });
})