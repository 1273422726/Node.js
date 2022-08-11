const fs = require("fs");
//追加文本内容，第一个值：文件路径，第二个值：追加文件中的内容
fs.appendFile("./avatar/a.txt","你好",(err)=>{
    // console.log(err)
    if(err && err.code === "EEXIST"){
        console.log("文件夹已经存在")
    }
})