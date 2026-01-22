import React from 'react';
import styles from './DocumentViewer.module.css';

const DocumentViewer = ({ data, showAnomalies, showOCR, isFraud, currentLang }) => {
  return (
    <div className={`${styles.container} ${isFraud ? styles.fraudBorder : ''}`}>
      <div className={styles.imageWrapper}>
        <img src={data.imageUrl} alt="Document Scan" className={styles.documentImage} />

        {showAnomalies && data.anomalies.map((anomaly) => {
          const info = anomaly.translations[currentLang] || anomaly.translations['en'];
          
          return (
            <div
            tabIndex={0}
              key={anomaly.id}
              className={styles.anomalyBox}
              style={{
                top: `${anomaly.coords.top}%`,
                left: `${anomaly.coords.left}%`,
                right: `${anomaly.coords.right}%`,
                width: `${anomaly.coords.width}%`,
                height: `${anomaly.coords.height}%`,
              }}
            >
              <div className={styles.tooltip}>
                <strong>{info.title}</strong>
                <p>{info.desc}</p>
              </div>
            </div>
          );
        })}

        {showOCR && (
          <div className={styles.ocrOverlay}>
            <div className={styles.ocrContent}>
              <p><strong>OCR Data Preview:</strong></p>
              <pre>{data.ocrPlaceholder}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentViewer;