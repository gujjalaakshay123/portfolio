const skillGroups = [
  {
    icon: '⌨️',
    category: 'Languages',
    color: 'cyan',
    tags: ['Java 17', 'Python', 'Go', 'C++', 'JavaScript', 'TypeScript', 'SQL', 'Bash'],
  },
  {
    icon: '⚙️',
    category: 'Backend & Frameworks',
    color: 'purple',
    tags: ['Spring Boot', 'Spring MVC', 'Spring Security', 'Hibernate', 'Microservices', 'Node.js', 'Express.js', 'Flask', 'Django', 'FastAPI', 'REST APIs', 'GraphQL'],
  },
  {
    icon: '🎨',
    category: 'Frontend',
    color: 'blue',
    tags: ['React.js', 'Angular 13–16+', 'HTML5', 'CSS3', 'Bootstrap', 'Responsive UI', 'Figma'],
  },
  {
    icon: '☁️',
    category: 'Cloud & DevOps',
    color: 'cyan',
    tags: ['AWS Lambda', 'ECS', 'EKS', 'Aurora', 'DynamoDB', 'S3', 'API Gateway', 'IAM', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Helm'],
  },
  {
    icon: '🗄️',
    category: 'Databases',
    color: 'green',
    tags: ['PostgreSQL', 'MySQL', 'Aurora', 'DynamoDB', 'Oracle', 'MongoDB', 'Snowflake'],
  },
  {
    icon: '📨',
    category: 'Messaging & Streaming',
    color: 'orange',
    tags: ['Kafka', 'RabbitMQ', 'ActiveMQ', 'AWS EventBridge'],
  },
  {
    icon: '🔄',
    category: 'CI/CD & Automation',
    color: 'purple',
    tags: ['GitHub Actions', 'Jenkins', 'GitLab CI/CD', 'Maven', 'Gradle', 'Terraform Pipelines'],
  },
  {
    icon: '🧪',
    category: 'Testing & Quality',
    color: 'green',
    tags: ['JUnit', 'Mockito', 'Selenium', 'Cypress', 'Postman', 'TestNG', 'Cucumber', 'Swagger', 'TDD', 'BDD'],
  },
  {
    icon: '📊',
    category: 'Monitoring & Logging',
    color: 'blue',
    tags: ['Prometheus', 'Grafana', 'ELK Stack', 'Datadog', 'New Relic'],
  },
  {
    icon: '🤖',
    category: 'AI & Machine Learning',
    color: 'orange',
    tags: ['TensorFlow', 'PyTorch', 'scikit-learn', 'AWS SageMaker', 'ML Model Deployment', 'Feature Engineering'],
  },
  {
    icon: '🔐',
    category: 'Security',
    color: 'pink',
    tags: ['OAuth2', 'JWT', 'RBAC', 'API Security', 'Vault', 'Secure Coding'],
  },
]

const colorLabel = {
  cyan:   '#00d4ff',
  purple: '#a78bfa',
  green:  '#34d399',
  orange: '#fbbf24',
  pink:   '#f472b6',
  blue:   '#60a5fa',
}

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <span className="section-tag">// tech stack</span>
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="section-bar" />

        <div className="skills-grid">
          {skillGroups.map(({ icon, category, color, tags }) => (
            <div className="skill-card" key={category}>
              <div className="skill-card-header">
                <span className="skill-icon">{icon}</span>
                <span className="skill-category" style={{ color: colorLabel[color] }}>
                  {category}
                </span>
              </div>
              <div className="skill-tags">
                {tags.map(tag => (
                  <span key={tag} className={`tag tag-${color}`}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
