const ExcelJS = require('exceljs');
const fs = require('fs');
const path = require('path');

class ExcelReporter {
  constructor() {
    this.workbook = new ExcelJS.Workbook();
    this.worksheet = this.workbook.addWorksheet('Test Results');
    this.setupHeaders();
  }
  
  setupHeaders() {
    this.worksheet.columns = [
      { header: 'TC ID', key: 'id', width: 15 },
      { header: 'Test case name', key: 'description', width: 40 },
      { header: 'Input length type', key: 'lengthType', width: 15 },
      { header: 'Input', key: 'input', width: 50 },
      { header: 'Expected output', key: 'expectedOutput', width: 50 },
      { header: 'Actual output', key: 'actualOutput', width: 50 },
      { header: 'Status', key: 'status', width: 10 },
      { header: 'Accuracy justification / Description of issue type', key: 'comments', width: 40 },
      { header: 'What is covered by the test', key: 'category', width: 60 }
    ];
    
    // Style header row
    const headerRow = this.worksheet.getRow(1);
    headerRow.font = { bold: true, color: { argb: 'FFFFFF' } };
    headerRow.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: '0070C0' }
    };
    headerRow.alignment = { vertical: 'middle', horizontal: 'center' };
  }
  
  addResult(result) {
    const row = this.worksheet.addRow(result);
    
    // Color code based on status
    if (result.status === 'Pass') {
      row.getCell('Status').fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'C6EFCE' }
      };
      row.getCell('Status').font = { color: { argb: '006100' } };
    } else {
      row.getCell('Status').fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFC7CE' }
      };
      row.getCell('Status').font = { color: { argb: '9C0006' } };
    }
  }
  
  async saveToFile(filename = 'test-results.xlsx') {
    const resultsDir = path.join(__dirname, '../results');
    
    // Create results directory if it doesn't exist
    if (!fs.existsSync(resultsDir)) {
      fs.mkdirSync(resultsDir, { recursive: true });
    }
    
    const filePath = path.join(resultsDir, filename);
    await this.workbook.xlsx.writeFile(filePath);
    console.log(`Test results saved to: ${filePath}`);
    return filePath;
  }
}

module.exports = ExcelReporter;