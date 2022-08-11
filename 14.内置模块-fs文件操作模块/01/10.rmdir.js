//删除目录
const fs = require("fs");
//读取目录下的文件的详细信息，比如：创建时间等等
fs.readdir("./avatar", (err, data) => {
  data.forEach((item) => {
    fs.unlink(`./avatar/${item}`, (err) => {});
  });
  fs.rmdir("./avatar", (err) => {
    console.log(err)
  });
});
