import './App.css'
import Tabs from './components/Tabs'
import ImagePlaceholder from './components/ImagePlaceholder'

function App() {
  // Define tabs with different sections of the CV
  const tabs = [
    {
      title: 'About Me',
      content: (
        <div className="tab-section">
          <h2>About Me</h2>
          <div className="profile-section">
            <ImagePlaceholder 
              size="small" 
              alt="Profile Photo"
              caption="Your Profile Photo"
            />
            <div className="profile-info">
              <p>Welcome to my CV! Here you can see my projects, life, and experience.</p>
              <p>This is a customizable React-based CV website with modern design and interactive tabs.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Projects',
      content: (
        <div className="tab-section">
          <h2>My Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <ImagePlaceholder 
                size="medium" 
                alt="Project 1"
                caption="Project 1: Description"
              />
              <h3>Project Title 1</h3>
              <p>Description of your first project goes here.</p>
            </div>
            <div className="project-card">
              <ImagePlaceholder 
                size="medium" 
                alt="Project 2"
                caption="Project 2: Description"
              />
              <h3>Project Title 2</h3>
              <p>Description of your second project goes here.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Experience',
      content: (
        <div className="tab-section">
          <h2>Professional Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <h3>Job Title</h3>
              <p className="timeline-date">2020 - Present</p>
              <p>Company Name</p>
              <p>Description of your role and responsibilities.</p>
            </div>
            <div className="timeline-item">
              <h3>Previous Position</h3>
              <p className="timeline-date">2018 - 2020</p>
              <p>Previous Company</p>
              <p>Description of your previous role and achievements.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Gallery',
      content: (
        <div className="tab-section">
          <h2>Photo Gallery</h2>
          <div className="gallery-grid">
            <ImagePlaceholder 
              size="large" 
              alt="Gallery Image 1"
              caption="Gallery Photo 1"
            />
            <ImagePlaceholder 
              size="large" 
              alt="Gallery Image 2"
              caption="Gallery Photo 2"
            />
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>My CV Portfolio</h1>
        <p className="subtitle">Explore my projects, experience, and life</p>
      </header>
      
      <main className="app-main">
        <Tabs tabs={tabs} />
      </main>
      
      <footer className="app-footer">
        <p>&copy; 2026 My CV. Built with React and HTML5.</p>
      </footer>
    </div>
  )
}

export default App
