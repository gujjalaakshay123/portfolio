const stats = [
  { number: '5+',  label: 'Years Experience' },
  { number: '3',   label: 'Companies' },
  { number: '15+', label: 'Tech Stacks' },
  { number: '40%', label: 'Deploy Time Reduced' },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <span className="section-tag">// about me</span>
        <h2 className="section-title">Who I Am</h2>
        <div className="section-bar" />

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a results-driven <strong>Software Engineer</strong> with 5+ years of experience
              designing, developing, and deploying scalable backend and full-stack systems across
              healthcare, fintech, and travel domains.
            </p>
            <p>
              Proficient in <strong>Java, Python, Golang, Spring Boot, React, and microservices
              architecture</strong>, with deep expertise in building high-throughput APIs, cloud-native
              applications on <strong>AWS, Azure, and GCP</strong>, and secure production systems.
            </p>
            <p>
              Skilled in automating CI/CD pipelines, containerized deployments with Docker &amp;
              Kubernetes, and database optimization across relational and NoSQL stores. Passionate
              about clean architecture, performance, and developer experience.
            </p>
          </div>

          <div className="about-stats">
            {stats.map(({ number, label }) => (
              <div className="stat-card" key={label}>
                <span className="stat-number">{number}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
