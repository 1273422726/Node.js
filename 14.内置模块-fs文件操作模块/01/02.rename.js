const fs = require("fs");
//重命名
fs.rename("./avatar","./avatar2",(err)=>{
    // console.log(err)
    if(err && err.code === "EEXIST"){
        console.log("文件夹已经存在")
    }
})