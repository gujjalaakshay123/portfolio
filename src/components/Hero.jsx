function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-grid" />
      <div className="hero-orb-1" />
      <div className="hero-orb-2" />

      <div className="container hero-content">
        <span className="hero-greeting">Hello, I'm</span>
        <h1 className="hero-name">Akshay Kumar Reddy</h1>
        <h2 className="hero-title">Software Engineer</h2>
        <p className="hero-desc">
          5+ years building scalable backend systems, cloud-native microservices, and
          full-stack applications. Expert in Java, Python, Go, Spring Boot, and React —
          delivering enterprise-grade solutions across AWS, Azure, and GCP.
        </p>
        <div className="hero-ctas">
          <button className="btn-primary" onClick={() => scrollTo('experience')}>View My Work</button>
          <button className="btn-outline" onClick={() => scrollTo('contact')}>Get In Touch</button>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        <div className="scroll-dot" />
      </div>
    </section>
  )
}
