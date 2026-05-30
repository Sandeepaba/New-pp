import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">Sandeep</div>
      <p>React JS Frontend Developer </p>
      <p className="footer-copy">© {new Date().getFullYear()} Sandeep Yadav. All rights reserved.</p>
    </footer>
  )
}

export default Footer
