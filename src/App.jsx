import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles/global.css'

gsap.registerPlugin(ScrollTrigger)

const EXPERIENCE = [
  {
    title: 'Clients Account Project Manager',
    company: 'DLA Piper',
    via: 'Through Naviga Recruiting',
    dates: 'Dec 2024 — Present',
    highlights: [
      'Manage and coordinate active matters, including tracking timelines and deliverables, monitoring task progress, supporting attorneys with workflow organization, and ensuring alignment with matter plans and deadlines.',
      'Maintain yearly client rate cards and update the rates for new timekeepers/existing timekeepers.',
      'Convert detailed billing, receivables, and matter information into clear business updates, insights, and recommendations that support informed partner and client decision-making.',
      'Drive follow-through on outstanding items by coordinating with clients, partners, billing personnel, collections staff, and client administration teams through resolution.',
      'Assist with preparation of materials, summaries, and constructing response for the client to support billing for all clients like Kenvue, G6, Chipotle, etc.',
      'Track accruals, approved budgets, alternative fee arrangements, and matter-level financial activity to identify exceptions, emerging risks, or profitability concerns requiring escalation.',
      'Built an AI-driven auto-report generator using Harvey AI — ingesting docketing data, case filings, and deadline trackers to produce polished litigation update reports.',
      'Manage high value global client project management work including matter intake, conflict resolution, scope determination, and AFA compliance spanning multiple jurisdictions.',
    ],
  },
  {
    title: 'Technical Project Manager III',
    company: 'UCLA',
    via: 'DTS Department',
    dates: 'May 2024 — Nov 2024',
    highlights: [
      'Worked on a UCLA - UCOP mandate project to strengthen the cybersecurity posture of the campus and protect network-connected assets from threats. The project focused on Asset & Data Visibility.',
      'Developed a central repository of IT assets through a ServiceNow configuration management database (CMDB) to better support and secure the campus.',
      'Facilitated working sessions with campus stakeholders such as Athletics department, Andersons school of management, School of Social Sciences, OARC and more to support UCLA\'s asset management discovery and ServiceNow CMDB integration.',
      'Provided guidance on data ingestion strategies to ensure accurate, consistent, and efficient asset tracking.',
      'Create and updated detailed project plans per campus unit to put risks in and action items; baseline asset count for tracking.',
    ],
  },
  {
    title: 'Project Manager II',
    company: 'Green Dot Corporation',
    via: 'Client: Walmart',
    dates: 'Jan 2023 — Apr 2024',
    highlights: [
      'Successful delivery of $1.6 Million project for Walmart. Responsible for key deliverables with all phases of project life cycle (feasibility study, requirements, analysis, ROI, business plan, design, testing, and implementation planning).',
      'Managing a team of ~80 resources including offshore and onshore.',
      'Developed project plans in Sciforma tool; tracked and approved time sheets; managed budget and resources.',
      'Set project management standards and methodologies, develop project schedules, Gantt charts, action/decision logs, RACIs, risk registers, meeting agendas/minutes, etc.',
      'Co-chair and facilitates timely, efficient, and action-oriented project meetings, responsible for coordinating team operations, communications, and Executive reporting.',
      'Support change management and continuous improvement efforts across programs, identifying and addressing gaps and opportunities.',
    ],
  },
  {
    title: 'Project Manager',
    company: 'Capgemini America Inc.',
    via: 'Prudential Insurance, Citi Bank, Capital Group',
    dates: 'Dec 2019 — Dec 2022',
    highlights: [
      'Conducted daily standups, sprint planning, backlog grooming, sprint reviews and sprint retrospectives.',
      'Defined and developed Product Vision and Roadmap. Worked effectively with teams both internally and offshore.',
      'Responsible for Project Charters and SOWs. Conducted Kick-off events for PI objectives.',
      'Created and maintained the project schedules, roadmaps, costs and tracked the backlog of work throughout.',
      'Responsible for maintaining User Stories & Dashboards using JIRA & closely working with the Dev team right from the initiation of the user stories up to closure in each Sprint.',
    ],
  },
  {
    title: 'Business Technology Analyst',
    company: 'Capgemini America Inc.',
    via: 'Client: AIG',
    dates: 'Nov 2017 — Nov 2019',
    highlights: [
      'Coordinated with business partners to fulfill requirements. Worked with developers and testers to analyze and implement requirements for successful deployment within time and cost constraints.',
      'Responsible for creating and maintaining quality user stories that meet client standards.',
      'Trained new team members on Rally to maintain Agile centralized culture.',
      'Convert wireframes into UI mockups and develop data visualizations, and prototypes that clearly illustrate how sites function and what they look like.',
    ],
  },
]

const SKILLS = [
  { category: 'Methodologies', items: 'Agile, Waterfall, Scrum, Kanban' },
  { category: 'Tools', items: 'Collaborati, Aderant, Smartsheets, Sciforma, Jira, Rally, Smartsheet, MS Office, Box' },
  { category: 'Web Technology', items: 'Harvey AI Tool, HighQ hub, SharePoint, Tableau, Miro, Visio, Power BI, Confluence' },
  { category: 'Project Management', items: 'Asana, MS Project, Intapp' },
]

const CERTIFICATIONS = [
  { name: 'Certified Scrum Master', abbr: 'CSM' },
  { name: 'Certified SAFe Practitioner', abbr: 'SAFe' },
  { name: 'Human Centered Design', abbr: 'HCD' },
]

function App() {
  const heroRef = useRef(null)
  const sectionsRef = useRef([])
  const timelineRef = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      /* Hero text stagger */
      gsap.from('.hero-text > *', {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
      })

      /* Hero photo scale + rotate */
      gsap.from('.hero-photo', {
        scale: 0.9,
        opacity: 0,
        rotate: -3,
        duration: 1.1,
        delay: 0.3,
        ease: 'power3.out',
      })

      /* Section reveals on scroll */
      sectionsRef.current.forEach((section) => {
        if (!section) return
        gsap.from(section, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            once: true,
          },
        })
      })

      /* Timeline cards staggered slide-up */
      const cards = document.querySelectorAll('.timeline-card')
      cards.forEach((card, i) => {
        gsap.from(card, {
          y: 25,
          opacity: 0,
          duration: 0.6,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            once: true,
          },
        })
      })

      /* Skill cards fade with slight scale */
      const skillCards = document.querySelectorAll('.skill-card')
      skillCards.forEach((card, i) => {
        gsap.from(card, {
          scale: 0.96,
          opacity: 0,
          duration: 0.5,
          delay: i * 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            once: true,
          },
        })
      })

      /* Cert cards staggered fade */
      const certCards = document.querySelectorAll('.cert-card')
      certCards.forEach((card, i) => {
        gsap.from(card, {
          y: 20,
          opacity: 0,
          duration: 0.5,
          delay: i * 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            once: true,
          },
        })
      })
    })

    return () => ctx.revert()
  }, [])

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  return (
    <>
      {/* ── NAV ── */}
      <nav className="nav">
        <div className="nav-inner">
          <span className="nav-logo">BK</span>
          <div className="nav-links">
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#certifications">Credentials</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero" ref={heroRef}>
        <div className="hero-inner">
          <div className="hero-text">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">Bhavyadeep Kaur</h1>
            <p className="hero-title">Client Accounts Project Manager</p>
            <p className="hero-summary">
              Dedicated Project Manager with 9+ years of experience for high-value global client accounts.
              Currently overseeing end-to-end matter management at DLA Piper including billing strategy,
              AFA compliance, and AI-driven process automation.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">Get in Touch</a>
              <a href="/resume/Bhavyadeep_Kaur_Resume.pdf" download className="btn btn-outline">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Resume
              </a>
              <a href="https://www.linkedin.com/in/bhavyadeep-kaur-24a86953/" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <div className="hero-photo">
              <img src="/bhavya-headshot.jpg" alt="Bhavyadeep Kaur" width="340" height="340" />
            </div>
          </div>
        </div>
        <div className="hero-divider" aria-hidden="true" />
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="section" id="experience" ref={addToRefs}>
        <div className="section-inner">
          <h2 className="section-heading">Professional Experience</h2>
          <div className="timeline" ref={timelineRef}>
            {EXPERIENCE.map((job, i) => (
              <article className="timeline-card" key={i}>
                <div className="timeline-card-header">
                  <div>
                    <h3 className="timeline-title">{job.title}</h3>
                    <p className="timeline-company">
                      {job.company} <span className="timeline-via">— {job.via}</span>
                    </p>
                  </div>
                  <span className="timeline-dates">{job.dates}</span>
                </div>
                <ul className="timeline-highlights">
                  {job.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="section section-alt" id="skills" ref={addToRefs}>
        <div className="section-inner">
          <h2 className="section-heading">Core Competencies</h2>
          <div className="skills-grid">
            {SKILLS.map((s, i) => (
              <div className="skill-card" key={i}>
                <h3 className="skill-category">{s.category}</h3>
                <p className="skill-items">{s.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="section" id="certifications" ref={addToRefs}>
        <div className="section-inner">
          <h2 className="section-heading">Certifications & Education</h2>
          <div className="certs-row">
            {CERTIFICATIONS.map((c, i) => (
              <div className="cert-card" key={i}>
                <span className="cert-abbr">{c.abbr}</span>
                <p className="cert-name">{c.name}</p>
              </div>
            ))}
          </div>
          <div className="education">
            <div className="edu-item">
              <h3>M.S. Electrical Engineering</h3>
              <p>California State University, Fullerton</p>
            </div>
            <div className="edu-item">
              <h3>B.Tech. Electronics & Communication Engineering</h3>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="section section-dark" id="contact" ref={addToRefs}>
        <div className="section-inner contact-inner">
          <h2 className="section-heading section-heading-gold">Let's Connect</h2>
          <p className="contact-subtext">
            Open to opportunities in project management, legal operations, and strategic program delivery.
          </p>
          <div className="contact-links">
            <a href="mailto:bhavya93@gmail.com" className="contact-item">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M22 7l-10 7L2 7"/>
              </svg>
              <span>bhavya93@gmail.com</span>
            </a>
            <a href="tel:+15625355757" className="contact-item">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <span>562-535-5757</span>
            </a>
            <a href="https://www.linkedin.com/in/bhavyadeep-kaur-24a86953/" target="_blank" rel="noopener noreferrer" className="contact-item">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Bhavyadeep Kaur. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
