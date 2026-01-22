import React, { useState } from 'react';
import { de } from './locales/de';
import { en } from './locales/en';
import { Sidebar } from './components/Sidebar/Sidebar.jsx';
import { documentData } from './data/mockData';
import DocumentViewer from './components/DocumentViewer/DocumentViewer.jsx';
import './App.css';

function App() {
  const [lang, setLang] = useState('de');

  const translations = lang === 'de' ? de : en;
  console.log("Selected language:", lang);
  const t = translations.ui || {}; 
  const [showAnomalies, setShowAnomalies] = useState(false);
  const [showOCR, setShowOCR] = useState(false);
  const [isFraud, setIsFraud] = useState(false);

  return (
    <div className="app-container">
      {isFraud && (
        <div className="fraud-banner">
          ⚠️ {t.fraudAlert || "ATTENTION: FRAUD SUSPECTED"} ⚠️
        </div>
      )}
      <header className="app-header">
        <h1>{t.title || "Loading..."}</h1>
        <div className="lang-switcher">
          <button onClick={() => setLang('de')} className={lang === 'de' ? 'active' : ''}>DE</button>
          <button onClick={() => setLang('en')} className={lang === 'en' ? 'active' : ''}>EN</button>
        </div>
      </header>

      <main style={{ display: 'flex', padding: '20px', gap: '20px' }}>
      <Sidebar 
        t={t}
        showAnomalies={showAnomalies}
        setShowAnomalies={setShowAnomalies}
        showOCR={showOCR}
        setShowOCR={setShowOCR}
        isFraud={isFraud}
        setIsFraud={setIsFraud}
      />

      <DocumentViewer 
        data={documentData}
        showAnomalies={showAnomalies}
        showOCR={showOCR}
        isFraud={isFraud}
        currentLang={lang}
      /> 
      
      </main>
      
    </div>
  );
}

export default App;