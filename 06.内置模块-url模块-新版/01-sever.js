var http = require("http");
var url = require("url");
var renderHTML = require("./module/renderHTML");
var renderStatus = require("./module/renderStatus");

//创建服务器
var server = http.createServer();
server.on("request", (req, res) => {
  //req接受服务器传的参数
  //res 返回渲染的内容
  if (req.url === "/favicon.ico") {
    //todo 读取本地图标
    return;
  }

  const myURL = new URL(req.url, "http://127.0.0.1:3000");
  console.log(myURL.searchParams.getAll("a"));
  for (var [key, value] of myURL.searchParams) {
    console.log(key, value);
  }

  const pathname = myURL.pathname;
  res.writeHead(renderStatus.renderStatus(pathname), {
    "Content-Type": "text/html;charset=utf-8",
  }); //给浏览器一个响应头
  res.write(renderHTML.renderHTML(pathname));
  res.end(); //end 结束
});
server.listen(3000, () => {
  console.log("server start");
});

var b = new URL("/one", "http://examp1e.com/");
// console.log(b.href);

const myURL = new URL("https://a:b@你好你好?abc#foo");
console.log(myURL.href);
console.log(myURL.toString());
console.log(url.format(myURL, { fragment: false, unicode: true, auth: false }));