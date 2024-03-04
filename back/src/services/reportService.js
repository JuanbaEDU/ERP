const PDFDocument = require('pdfkit');

const generateUserReport = async (users) => {
  const doc = new PDFDocument;
  let content = '';

  users.forEach(user => {
    content += `Nombre: ${user.name}\n`;
    content += `Email: ${user.email}\n\n`;
  });

  doc.text(content);
  return doc;
};

module.exports = {
  generateUserReport,
};
