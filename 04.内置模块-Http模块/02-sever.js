var http = require("http");
var renderHTML = require("./module/renderHTML");
var renderStatus = require("./module/renderStatus");

//创建服务器
var server = http.createServer();
server.on("request", (req, res) => {
  //req接受服务器传的参数
  //res 返回渲染的内容
  console.log(req.url);
  if (req.url === "/favicon.ico") {
    //todo 读取本地图标
    return;
  }
  // res.write("Hello World")
  res.writeHead(renderStatus.renderStatus(req.url), {
    "Content-Type": "text/html;charset=utf-8",
  }); //给浏览器一个响应头
  res.write(renderHTML.renderHTML(req.url));
  res.end(); //end 结束
});
server.listen(3000, () => {
  console.log("server start");
});
