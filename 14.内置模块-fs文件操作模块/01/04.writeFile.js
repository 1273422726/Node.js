const fs = require("fs");
//创建文本，第一个值：文件路径，第二个值：文件中的内容，文件中有值就会被替换
fs.writeFile("./avatar/b.txt","hello world",(err)=>{
    // console.log(err)
    if(err && err.code === "EEXIST"){
        console.log("文件夹已经存在")
    }
})