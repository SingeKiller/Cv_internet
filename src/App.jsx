import { useState } from 'react'
import './App.css'
import TabNavigation from './components/TabNavigation'
import Profile from './components/Profile'
import Experience from './components/Experience'
import Skills from './components/Skills'

function App() {
  const [activeTab, setActiveTab] = useState('profile')

  const tabs = [
    { id: 'profile', label: 'Profil' },
    { id: 'experience', label: 'Parcours' },
    { id: 'skills', label: 'Compétences' }
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <Profile />
      case 'experience':
        return <Experience />
      case 'skills':
        return <Skills />
      default:
        return <Profile />
    }
  }

  return (
    <div className="cv-container">
      <header className="cv-header">
        <h1>Mon CV Professionnel</h1>
      </header>
      <TabNavigation 
        activeTab={activeTab}
        onTabChange={setActiveTab}
        tabs={tabs}
      />
      <main className="cv-content">
        {renderTabContent()}
      </main>
      <footer className="cv-footer">
        <p>© 2026 - CV réalisé avec React</p>
      </footer>
    </div>
  )
}

export default App
