const fs = require("fs");
//删除目录
fs.rmdir("./avatar2", (err) => {
  // console.log(err)
  if (err && err.code === "EEXIST") {
    console.log("文件夹已经存在");
  }
});
