const fs = require("fs");
//读取目录下的文件，第一个值：目录名称
fs.readdir("./avatar",(err,data)=>{
    if(!err){
        console.log(data);
    }
})