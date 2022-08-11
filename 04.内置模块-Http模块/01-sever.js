var http = require("http");

//创建服务器
http
  .createServer((req, res) => {
    //req接受服务器传的参数
    //res 返回渲染的内容

    // res.write("Hello World")
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" }); //给浏览器一个响应头
    res.write(`  
        <html>
            <b>hello,word</b>
            <b>我是哈哈哈哈哈</b>
        </html>
    `);
    res.end(); //end 结束
  })
  .listen(3000, () => {
    console.log("server start");
  });
