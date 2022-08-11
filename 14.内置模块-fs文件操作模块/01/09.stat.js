const fs = require("fs");
//读取目录下的文件的详细信息，比如：创建时间等等
fs.stat("./avatar",(err,data)=>{
    if(!err){
        console.log(data);
    }
})