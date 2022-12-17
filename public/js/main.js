let books = [] 
const endPointAPI = 'https://caroline-barbosa-vilar.github.io/bookstore-json/data/books.json'
getApiBooks()
const bookInsertElement = document.getElementById('items')

async function getApiBooks() {
  const res = await fetch(endPointAPI)
  books = await res.json()
  insertItemsOnScreen(books)
}

function insertItemsOnScreen(bookItems){
  bookItems.forEach(book => {
    bookInsertElement.innerHTML += `
    <div>
      <img src="${book.img}" alt="placeholder img" class="glider-image-sz">
      <h4 class="title-test">${book.title}</h4>
      <p>${book.synopsis}</p>
      <div>
        <p>$0.00</p>
        <a href="#" class="glider-carousel-btn">Buy</a>
      </div>
    /div>
    `
  });
}
books