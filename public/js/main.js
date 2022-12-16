let books = [] 
const endPointAPI = 'https://caroline-barbosa-vilar.github.io/bookstore-json/data/books.json'
getApiBooks()

async function getApiBooks() {
  const res = await fetch(endPointAPI)
  books = await res.json()
} 
