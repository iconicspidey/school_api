const readXlsxFile = require("read-excel-file/node");
const path = require("path");
const fs = require("fs");
const bulkStudentsReg = async (req, res) => {
  const filePath = path.join(__dirname, "../template/test.xlsx");
  console.log(req.file);
  // readXlsxFile(filePath).then((rows) => {
  //   res.json(rows);
  // });
  readXlsxFile(Buffer.from(fs.readFileSync(filePath))).then((rows) => {
    // res.json(rows);
  });
  readXlsxFile(fs.createReadStream(filePath)).then((rows) => {
    const mapped = rows.map((row) => {
      return row.map((inner, i) => {
        return { name: inner };
      });
    });
    res.json(mapped);
  });
};
module.exports = bulkStudentsReg;
