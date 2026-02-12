import { useState } from 'react';
import './Tabs.css';

function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        {tabs[activeTab] && tabs[activeTab].content}
      </div>
    </div>
  );
}

export default Tabs;
