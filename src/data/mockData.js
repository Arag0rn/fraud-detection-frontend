export const documentData = {
  imageUrl: "/excel-invoice-template.png",
  anomalies: [
    {
      id: 1,
      coords: { top: 18, right: 57, width: 36, height: 10 }, 
      translations: {
        de: { title: "Falsches Datum", desc: "Das Rechnungsdatum liegt in der Zukunft." },
        en: { title: "Wrong Date", desc: "The invoice date is in the future." }
      }
    },
    {
      id: 2,
      coords: { top: 69, left: 57, width: 36, height: 9 },
      translations: {
        de: { title: "Summenfehler", desc: "Die Mehrwertsteuer wurde falsch berechnet." },
        en: { title: "Calculation Error", desc: "VAT calculation is incorrect." }
      }
    }
  ],
  ocrPlaceholder: "Invoice #9901\nDate: 2026-01-22\nTotal: 1250.00 EUR"
};