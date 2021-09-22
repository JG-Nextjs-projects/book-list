// import '../../../data/data.json'
// const books = require('../../../data/data.json')

fetch("../../../data/data.json")
.then(response => {
  return response.json();
})
.then(books => console.log(books));


export default function handler({query: { id }}, res) {
  const filtered = books.filter((book) => book.id === id)

  if(filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `The book with id of ${id} is not found.` })
  }
}