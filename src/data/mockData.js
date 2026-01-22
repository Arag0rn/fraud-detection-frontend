export const documentData = {
  imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Receipt_Full_Example.jpg", 
  anomalies: [
    {
      id: 1,
      translations: {
        en: { title: "Suspicious Date", desc: "Font style differs from the rest of the document." },
        de: { title: "Verdächtiges Datum", desc: "Schriftart weicht vom Rest des Dokuments ab." }
      },
      coords: { top: 12, left: 65, width: 25, height: 4 }
    }
  ],
  ocrText: "MAX MUSTERMANN... RECHNUNG #12345"
};