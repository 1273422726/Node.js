const fs = require("fs");
const readstream = fs.createReadStream("./1.txt", "utf-8");
const writeStream = fs.createWriteStream("./2.txt", "utf-8");

readstream.pipe(writeStream);
 