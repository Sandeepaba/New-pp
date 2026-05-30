import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () => setDrawerOpen(prev => !prev)
  const closeDrawer = () => setDrawerOpen(false)

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <nav className="navbar">
        <div className="logo">Sandeep</div>

        <ul className="nav-links">
          {links.map(link => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <button
          className={`hamburger ${drawerOpen ? 'open' : ''}`}
          onClick={toggleDrawer}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Overlay */}
      <div
        className={`drawer-overlay ${drawerOpen ? 'open' : ''}`}
        onClick={closeDrawer}
      />

      {/* Side Drawer */}
      <div className={`drawer ${drawerOpen ? 'open' : ''}`}>
        {links.map(link => (
          <a key={link.href} href={link.href} onClick={closeDrawer}>
            {link.label}
          </a>
        ))}
      </div>
    </>
  )
}

export default Navbar
