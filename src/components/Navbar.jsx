import { useState, useEffect } from 'react'

const links = [
  { label: 'About',      id: 'about' },
  { label: 'Skills',     id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education',  id: 'education' },
  { label: 'Contact',    id: 'contact' },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-inner">
        <button className="nav-logo" onClick={() => scrollTo('hero')}>AK</button>
        <ul className="nav-links">
          {links.map(({ label, id }) => (
            <li key={label}>
              <button className="nav-link" onClick={() => scrollTo(id)}>{label}</button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
