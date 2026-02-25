import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import About      from './components/About'
import Skills     from './components/Skills'
import Experience from './components/Experience'
import Education  from './components/Education'
import Contact    from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <footer className="footer">
        <div className="container">
          <p>
            Designed &amp; built by <span>Akshay Kumar Reddy</span> &bull; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  )
}
