//删除目录
const fs = require("fs").promises;
// fs.readdir("./avatar").then(async (data) => {  //第一种方式
//   let arr = [];
//   data.forEach((item) => {
//     arr.push(fs.unlink(`./avatar/${item}`));
//   });
//   await Promise.all(arr);
//   await fs.rmdir("./avatar");
// });

fs.readdir("./avatar").then(async (data) => {
  //第二种方式
  await Promise.all(data.map((item) => fs.unlink(`./avatar/${item}`)));
  await fs.rmdir("./avatar");
});
