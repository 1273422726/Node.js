const fs = require("fs");
//写文件
const ws = fs.WriteStream("./2.txt", "utf-8");
ws.write("111111111111111111111");
ws.write("22222222222222222222222");
ws.write("333333333333333333333333");

ws.end();
