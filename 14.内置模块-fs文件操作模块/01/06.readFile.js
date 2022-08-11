const fs = require("fs");
//读取文本内容，第一个值：文件路径， 第二个值： 文件格式
fs.readFile("./avatar/a.txt","utf-8",(err,data)=>{
    if(!err){
        console.log(data);
    }
})