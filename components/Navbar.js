import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        <Link href="/"><a><h1>Site Logo</h1></a></Link>
        <ul className={styles.mainNav}>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/about"><a>About</a></Link></li>
          <li><Link href="/books"><a>Books</a></Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;