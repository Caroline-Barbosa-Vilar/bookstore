let books = [] 
const endPointAPI = 'https://caroline-barbosa-vilar.github.io/bookstore-json/data/books.json'
getApiBooks()

async function getApiBooks() {
  const res = await fetch(endPointAPI)
  books = await res.json()
  console.table(books)
  insertItemsOnScreen(books)
}

function insertItemsOnScreen(bookItems){
  bookItems.forEach(book => {
    let bookInsertElement = document.getElementById(book.category)

    bookInsertElement.innerHTML += `
      <div class="mb-5 card-item">
        <div class="card-item-header">
          <img src="${book.img}" alt="" class="card-item-img">
          <div class="card-item-text">
            <h3 class="card-item-title">${book.title}</h3>
            <p>${book.author}</p>
          </div>
        </div>  
        <span id="more">${book.synopsis}</span>
        <p>$ ${book.price.toFixed(2)}</p>
      </div>
    `
  });
}
