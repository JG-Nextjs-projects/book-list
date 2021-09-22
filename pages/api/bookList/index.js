// import '../../../data/data.json'
const books = require('../../../data/data.json')

// Default example
// export default (req, res) => {
//   res.status(200).json({ name: 'John Doe', method: req.method })
// }

export default function handler(req, res) {
  res.status(200).json(books)
}