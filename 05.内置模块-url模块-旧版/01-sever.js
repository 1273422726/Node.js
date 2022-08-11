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

  var pathname = url.parse(req.url).pathname;
  var urlObj = url.parse(req.url, true);
  console.log(urlObj.query.a);
  // res.write("Hello World")
  res.writeHead(renderStatus.renderStatus(pathname), {
    "Content-Type": "text/html;charset=utf-8",
  }); //给浏览器一个响应头
  res.write(renderHTML.renderHTML(pathname));
  res.end(); //end 结束
});
server.listen(3000, () => {
  console.log("server start");
});

const ur1string = 'https ://www.baidu.com:443/ad/index.html?id=8&name=mouse#tag=110';
const parsedstr = url.parse(ur1string);
console.log(parsedstr)

const urlobject = {
  protocol: "https:",
  slashes: true,
  auth: null,
  host: "www.baidu.com:443",
  port: "443",
  hostname: "www.baidu.com",
  hash: "#tag=110",
  search: "?id=8&name=mouse",
  query: { id: "8", name: "mouse" },
  pathname: "/ad/index.html",
  path: "/ad/index.html?id=8&name=mouse",
};
const parsedobj = url.format(urlobject);
console.log(parsedobj);

var a = url.resolve("/one/two/three","four"); //(注意最后加/，不加/最后一个会被替换，加/就进行拼接)
console.log("a:",a);
var b = url.resolve("http://examp1e.com/", "/one");  //(替换/后面的所有内容)
var c = url.resolve("http://example.com/one/cccc/", "/two");
console.log("b:",b);
console.log("c:",c);