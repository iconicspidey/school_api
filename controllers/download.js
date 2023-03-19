const path = require("path");
const download = (req, res) => {
  const filePath = path.join(__dirname, "../template/test.xlsx");
  res.download(filePath);
};
module.exports = download;
