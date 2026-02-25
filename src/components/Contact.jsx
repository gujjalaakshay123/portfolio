const contactItems = [
  {
    icon: '📧',
    label: 'Email',
    value: 'akshaykumarreddy2023@gmail.com',
    href: 'mailto:akshaykumarreddy2023@gmail.com',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+1 (959) 590-8055',
    href: 'tel:+19595908055',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'New York, NY, USA',
    href: null,
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/akshay-kumar-reddy-gujjula-649960178',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <span className="section-tag">// get in touch</span>
        <h2 className="section-title">Contact</h2>
        <div className="section-bar" />

        <div className="contact-grid">
          <div>
            <p className="contact-intro">
              I'm currently open to new opportunities — full-time roles, contract work,
              or interesting collaborations. Whether you have a project in mind or just
              want to connect, my inbox is always open.
            </p>

            <div className="contact-items">
              {contactItems.map(({ icon, label, value, href }) =>
                href ? (
                  <a
                    key={label}
                    href={href}
                    className="contact-item"
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                  >
                    <div className="contact-icon">{icon}</div>
                    <div>
                      <div className="contact-label">{label}</div>
                      <div className="contact-value">{value}</div>
                    </div>
                  </a>
                ) : (
                  <div key={label} className="contact-item">
                    <div className="contact-icon">{icon}</div>
                    <div>
                      <div className="contact-label">{label}</div>
                      <div className="contact-value">{value}</div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="cta-card">
            <span className="cta-emoji">👋</span>
            <h3 className="cta-title">Let's Work Together</h3>
            <p className="cta-text">
              Open to senior backend, full-stack, and cloud engineering roles.
              Let's build something great together.
            </p>
            <a href="mailto:akshaykumarreddy2023@gmail.com" className="btn-primary">
              Send Me an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
