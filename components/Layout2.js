import Footer from './Footer'

const Layout2 = ({ children }) => {
  return (
    <div className="main">
      { children }
      <Footer />
    </div>
  )
}

export default Layout2