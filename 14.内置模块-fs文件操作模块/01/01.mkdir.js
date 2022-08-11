const fs = require("fs");
//创建目录
fs.mkdir("./avatar",(err)=>{
    // console.log(err)
    if(err && err.code === "EEXIST"){
        console.log("文件夹已经存在")
    }
})