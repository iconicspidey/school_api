const xlsx = require("xlsx");
const path = require("path");
const bulkStudentsReg = async (req, res) => {
  const filePath = path.join(__dirname, "../template/test.xlsx");
  const workbook = xlsx.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const rows = xlsx.utils.aoa_to_sheet(sheet, { header: 1 });
  console.log(rows);

  res.json(rows);
};
module.exports = bulkStudentsReg;
