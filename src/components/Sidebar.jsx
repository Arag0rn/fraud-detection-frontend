import React from 'react'
import styles from './Sidebar.module.css';

export const Sidebar = ({t, showAnomalies, setShowAnomalies, showOCR, setShowOCR, isFraud, setIsFraud}) => {
  return (
    <aside className={styles.sidebar}>
        <div className={styles.card}>
            <h3>{t.details}</h3>
            <div className={styles.buttonGroup}>
          <button 
            className={showAnomalies ? styles.active : ''} 
            onClick={() => setShowAnomalies(!showAnomalies)}
          >
            {showAnomalies ? t.hideAnomalies : t.showAnomalies}
          </button>

          <button 
            className={showOCR ? styles.active : ''} 
            onClick={() => setShowOCR(!showOCR)}
          >
            {t.showOCR}
          </button>
        </div>

        <hr className={styles.divider} />

        <div className={styles.actionSection}>
          <button 
            className={`${styles.fraudBtn} ${isFraud ? styles.isFraudActive : ''}`}
            onClick={() => setIsFraud(true)}
          >
            {t.markAsFraud}
          </button>

          {isFraud && (
            <button 
              className={styles.clearBtn} 
              onClick={() => setIsFraud(false)}
            >
              {t.clearStatus}
            </button>
          )}
        </div>
        </div>
    </aside>


  )
}
