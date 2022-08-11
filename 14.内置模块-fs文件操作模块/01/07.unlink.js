const fs = require("fs");
//删除文件
fs.unlink("./avatar/a.txt", (err) => {
  if (err && err.code === "EEXIST") {
    console.log("文件夹已经存在");
  }
});
