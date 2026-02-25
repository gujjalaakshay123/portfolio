const experiences = [
  {
    company: 'Mastercard',
    role: 'Software Engineer (Remote)',
    location: 'CA, USA',
    date: 'Jul 2025 – Present',
    bullets: [
      'Designed and deployed high-performance microservices using Java, Python, and Golang, enabling enterprise-scale transaction processing and analytics.',
      'Developed RESTful APIs supporting millions of concurrent requests with low latency, following industry standards and best practices.',
      'Built automated data pipelines using Apache Airflow for reliable ingestion, validation, and processing of large datasets across distributed systems.',
      'Implemented cloud-native deployments using Docker, Kubernetes, and GitHub Actions CI/CD, reducing deployment time by 40%.',
      'Collaborated with frontend teams to integrate APIs into React, Angular, and Next.js applications, ensuring seamless UX.',
      'Applied OAuth2/JWT-based authentication and secure coding practices to protect sensitive payment data and maintain compliance.',
    ],
  },
  {
    company: 'FlomadLabs',
    role: 'Full Stack Developer',
    location: 'USA',
    date: 'Jun 2024 – May 2025',
    bullets: [
      'Led end-to-end development of a cloud-based travel platform, increasing user engagement by 30% through performance optimizations.',
      'Designed Spring Boot microservices and Spring Batch jobs for high-volume transactional operations at scale.',
      'Containerized microservices and deployed on AWS ECS/EKS using Terraform and Helm, reducing release cycles by 40%.',
      'Developed and integrated RESTful APIs with React and Angular frontends, significantly optimizing API response times.',
      'Implemented OAuth2, JWT tokens, and RBAC for robust application security and access control.',
      'Set up monitoring with Prometheus, Grafana, and ELK Stack — improving system uptime and reducing MTTR.',
    ],
  },
  {
    company: 'Optum',
    role: 'Software Engineer',
    location: 'Hyderabad, India',
    date: 'Jan 2020 – Aug 2023',
    bullets: [
      'Migrated legacy monolithic applications to Spring Boot microservices, reducing latency by 35% and improving overall maintainability.',
      'Designed and maintained CI/CD pipelines using Jenkins, Docker, and Gradle, reducing deployment effort by 50%.',
      'Developed optimized SQL queries, stored procedures, and ETL workflows for large-scale healthcare data migration into PostgreSQL.',
      'Automated data ingestion and batch processing pipelines using Python and Apache Airflow, reducing operational errors by 30%.',
      'Performed Root Cause Analysis on production incidents using Prometheus, Grafana, and ELK Stack.',
      'Implemented RBAC, secure coding standards, and API security measures aligned with healthcare compliance requirements.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <span className="section-tag">// work history</span>
        <h2 className="section-title">Experience</h2>
        <div className="section-bar" />

        <div className="timeline">
          {experiences.map((exp, i) => (
            <div className="timeline-item" key={i}>
              <div className="timeline-dot" />
              <div className="exp-card">
                <div className="exp-header">
                  <div>
                    <div className="exp-company">{exp.company}</div>
                    <div className="exp-role">{exp.role}</div>
                    <div className="exp-location">📍 {exp.location}</div>
                  </div>
                  <span className="exp-date">{exp.date}</span>
                </div>
                <ul className="exp-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
