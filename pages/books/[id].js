import Image from 'next/image'
import styles from '../../styles/Book.module.css'

// Ganerate all paths for each book
export const getStaticPaths = async () => {

  const res = await fetch('http://localhost:3004/books')
  const data = await res.json()

  const paths = data.map(book => {
    return {
      params: { id: book.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

// Get specific book details
export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch(`http://localhost:3004/books/${id}`)
  const data = await res.json()

  return {
    props: { book: data }
  }
}

// Stateless React Component Sorta
const Details = ({ book }) => {
  let images = []

  for (let i = 1; i <= book.pages; i++) {
    images.push(i)
  }

  return (
    <>
      <h2 className={styles.title}>{book.title}</h2>
      <div className={styles.gallery}>
        {images.map(image =>
          (
          <figure className={styles.item}>
            <Image
              src={'/books/' + book.author_directory + '/' + book.book_directory + '/' + image + '.jpg'}
              width={150}
              height={150}
            />
            <figcaption>{image}</figcaption>
          </figure>
        ))}
      </div>
    </>
  )
}

export default Details