import styles from '../../styles/Books.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Books = ({items}) => {
  return (
    // "/books/john-doe/some-title/1.jpg"
    <div className={styles.container}>
      {items.books.map(book => (
      <article key={book.id} className={styles.article}>
        <h2><Link href={'/books/' + book.id}><a>Book Title: {book.title}</a></Link></h2>
        <h3>Author: {book.author}</h3>
        <Image
          src={'/books/' + book.author_directory + '/' + book.book_directory + '/' + book.id + '.jpg'}
          width={400}
          height={300}
        />
      </article>
      )
    )}
    </div>
  )
}
export default Books

export const getStaticProps = async () => {

  const res = await fetch('http://localhost:3000/api/hello')
  const data = await res.json()

  return {
    props: { items: data }
  }
}