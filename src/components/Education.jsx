const education = [
  {
    icon: '🎓',
    degree: 'Master of Science — Computer Science',
    school: 'SUNY New Paltz',
    location: 'New York, USA',
  },
  {
    icon: '🎓',
    degree: 'Bachelor of Technology — Computer Science',
    school: 'Annamacharya Institute of Technology',
    location: 'India',
  },
]

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <span className="section-tag">// academic background</span>
        <h2 className="section-title">Education</h2>
        <div className="section-bar" />

        <div className="edu-grid">
          {education.map(({ icon, degree, school, location }) => (
            <div className="edu-card" key={school}>
              <span className="edu-icon">{icon}</span>
              <div className="edu-degree">{degree}</div>
              <div className="edu-school">{school}</div>
              <div className="edu-location">📍 {location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
