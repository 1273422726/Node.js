const fs = require("fs");
//读文件
const rs = fs.createReadStream("./1.txt", "utf8");
rs.on("data", (chunk) => {
  console.log("chunk——", chunk);
});
rs.on("end", () => {
  console.log("end——");
});
rs.on("error", (err) => {
  console.log("err——", err);
});
