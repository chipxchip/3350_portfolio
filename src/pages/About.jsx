import "./About.css";

const skills = [
  { category: "Languages", items: ["Java", "C++", "Python", "HTML5", "CSS3"] },
  {
    category: "Networking & Systems",
    items: [
      "Network Configuration",
      "System Administration",
      "Server Administration",
      "Hardware Configuration",
    ],
  },
  { category: "Frameworks & Libraries", items: ["React", "React Router"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Firebase"] },
];

const education = [
  {
    title: "Bachelor's Degree, Cybersecurity and Networking",
    place: "Weber State University",
    period: "Projected Graduation — April 2027",
    description:
      "Coursework spanning network architecture, systems administration, and cybersecurity fundamentals, alongside hands-on programming and web development.",
  },
  {
    title: "Associate's Degree",
    place: "Weber State University",
    period: "Completed — December 2025",
    description:
      "Foundational coursework building toward the Bachelor's program in Cybersecurity and Networking.",
  },
];

const experience = [
  {
    title: "Civilian Employee",
    place: "United States Air Force",
    period: "Present",
    description:
      "Working as a civilian with hands-on experience in computer hardware configuration, network building and configuration, and system and server administration. Actively seeking opportunities in the cyber and networking field.",
  },
];

function About() {
  return (
    <div className="container section about">
      <div className="about-header">
        <p className="eyebrow">about me</p>
        <h1>A bit more about how I got here.</h1>
        <p className="about-intro">
          I'm a learning solo developer who enjoys turning ideas into working,
          well-organized interfaces. I like building on my skills by creating
          apps that I have a need for or I find interesting. This page covers my
          background, developing skills, and what I've been working on.
        </p>
      </div>

      <div className="about-grid">
        <section className="about-block">
          <h2 className="about-block-title">Skills</h2>
          <div className="skills-grid">
            {skills.map((group) => (
              <div className="skills-group" key={group.category}>
                <h3 className="skills-group-title">{group.category}</h3>
                <div className="skills-tags">
                  {group.items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="about-block">
          <h2 className="about-block-title">Education</h2>
          <div className="timeline">
            {education.map((entry) => (
              <div className="timeline-entry" key={entry.title}>
                <div className="timeline-marker" />
                <div>
                  <p className="timeline-period">{entry.period}</p>
                  <h3 className="timeline-title">{entry.title}</h3>
                  <p className="timeline-place">{entry.place}</p>
                  <p className="timeline-desc">{entry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="about-block">
          <h2 className="about-block-title">Experience</h2>
          <div className="timeline">
            {experience.map((entry) => (
              <div className="timeline-entry" key={entry.title}>
                <div className="timeline-marker" />
                <div>
                  <p className="timeline-period">{entry.period}</p>
                  <h3 className="timeline-title">{entry.title}</h3>
                  <p className="timeline-place">{entry.place}</p>
                  <p className="timeline-desc">{entry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
