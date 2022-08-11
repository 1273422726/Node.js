### Node.js 简介

Node.js 是一个 javascript 运行环境。 它让 javascript 可以开发后端程序, 实现几乎其他后端语言实现的所有功能，可以与 PHP、Java、 Python、 .NET、 Ruby 等后端语言平起平坐。
Nodejs 是基于 V8 引擎，V8 是 Google 发 布的开源 JavaScript 引擎，本身就是用于 Chrome 浏览器的 js 解释部分，但是 Ryan Dahl 这哥们，鬼才般的，把这个 V8 搬到了服务器上,用于做服务器的软件。

### Node.js 特性

●Nodejs 语法完全是 js 语法， 只要你懂 js 基础就可以学会 Nodejs 后端开发
●NodeJs 超强的高并发能力,实现高性能服务器
● 开发周期短、开发成本低、学习成本低

### 模块暴露的方式

1.  module.exports = { //多个方法
    test, //test:test 因为名字相同，所以可以简写
    upper,
    };
    module.exports = test; //单个方法

2.  exports.test = test;

### npm 使用

npm init
npm insta11 包名 -g (uni nsta11 , update)
npm insta11 包名 --save-dev (uninsta11, update)
npm list -g (不加-g， 列举当前目录下的安装包)
npm info 包名(详细信息) npm info 包名 version(获取 最新版本)
npm insta11 md5@1 (安装指定版本)
npm outdated( 检 查包是否已经过时)

"dependencies": { "md5": "^2.1.0" } ^ 表示如果直接 npm insta1l 将会安 md5 2._._ 最新版本
"dependencies": { "md5": "~2.1.0" } ~ 表示如果直接 npm install 将会安装 md5 2.1.\_ 最新版本
"dependencies": { "md5": "_"} _ 表示如果直接 npm instal1 将会安装 md5 最新版本

### yarn 使用

1.安装 yarn
npm insta11 -g yarn
对比 npm:
速度超快: Yarn 缓存了每个下载过的包，所以再次使用时无需重复下载。同时 利用并行下载以最大化资源利用
率，因此安装速度更快。
超级安全:在执行代码之前，Yarn 会通过算法校验每个安装包的完整性。

2. 开始新项目
   yarn init
3. 添加依赖包
   yarn add [package] //package 包名
   yarn add [package]@[version]
   yarn add [package] --dev
4. 升级依赖包
   yarn upgrade [package]@[version]
5. 移除依赖包
   yarn remove [package]
6. 安装项目的全部依赖
   yarn insta11

### 内置模块——http 模块

01 http 模块
要使用 HTTP 服务器和客户端，则必须 require('http').
第一种写法：
const http = require('http');
//创建本地服务器来从其接收数据
const server = http. createserver((req，res) => {
res.writeHead(200，{ ' Content-Type': ' application/json' });
res.end(JSON.stringify({
data: 'He11o world! '
}));
});
server. 1isten(8000);

第二种写法：
const http = require('http');
//创建本地服务器来从其接收数据
const server = http. createServer();
//监听请求事件
server.on(' request', (request, res) => {
res.writeHead(200，{ ' Content -Type': ' application/json' });
res.end(JSON. stringify({
data: 'Hel1o World!
}));
});
server.listen(8000);

### 内置模块—— url 模块（旧版）：

1. parse //解析，url 的路径，后面携带参数等等
   const url = require('url')
   const urlstring = 'https ://www.baidu.com:443/ad/index.html?id=8&name=mouse#tag=110';
   const parsedstr = url. parse(urlstring)
   console.log(parsedstr)

2. format //格式化
   const url = require('url')
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
   const parsedobj = url.format(urlobject)
   console.log(parsedobj)

3. resotve //拼接 url
   const url = require('url')
   var a = url.resolve("/one/two/three","four"); //(注意最后加/，不加/最后一个会被替换，加/就进行拼接)
   console.log("a:",a);
   var b = url.resolve("http://examp1e.com/", "/one");
   var c = url.resolve("http://example.com/one", "/two");
   console.log("b:",b);
   console.log("c:",c);

### 内置模块—— url 模块（新版）：

//其他方法可以参考官网：https://www.nodeapp.cn/

1. searchParams //解析，url 的路径，后面携带参数等等
   const myURL = new URL(req.url, "http://127.0.0.1:3000"); //也可以拼接
   console.log(myURL.searchParams);
   for (var [key, value] of myURL.searchParams) { //取出 url 携带参数
   console.log(key, value);
   }
2. format //格式化
   /\*_
   auth : 如果序列化的 URL 字符串应该包含用户名和密码为 true，否则为 false。默认为 true。
   fragment : 如果序列化的 URL 字符串应该包含分段为 true，否则为 false。默认为 true。
   search : 如果序列化的 URL 字符串应该包含搜索查询为 true，否则为 false。默认为 true。
   unicode : true 如果出现在 URL 字符串主机元素里的 Unicode 字符应该被直接编码而不是使用 Punycode 编码为 true，默认为 false。
   _/
   const myURL = new URL("https://a:b@你好你好?abc#foo");
   console.log(url.format(myURL, { fragment: false, unicode: true, auth: false }));
   // 输出 'https://你好你好/?abc'

### 内置模块—— querystring 模块

1. parse //解析成对象
   var querystring = require("querystring");
   var str = "name=admin&age=22&location=dalian";
   var obj = querystring.parse(str);
   console.log(obj);
   //输出
   {
   name: 'admin',
   age: '22',
   location: 'dalian'
   }
2. stringify //编码成字符串
   var querystring = require("querystring");
   var myobj = {
   a: 1,
   b: 2,
   c: 3,
   };
   var obj = querystring.stringify(myobj);
   console.log(myobj);
   //输出：
   a=1&b=2&c=3

3. escape //转译编码
   var querystring = require("querystring");
   var str1 = "id=3&city=北京&url=https://www.baidu.com";
   console.log(querystring.escape(str1));
   //输出为：
   id%3D3%26city%3D%E5%8C%97%E4%BA%AC%26url%3Dhttps%3A%2F%2Fwww.baidu.com

4. unescape //编码转换
   var querystring = require("querystring");
   var str1 = "id%3D3%26city%3D%E5%8C%97%E4%BA%AC%26url%3Dhttps%3A%2F%2Fwww.baidu.com";
   console.log(querystring.unescape(str1));
   //输出为：
   id=3&city=北京&url=https://www.baidu.com

### 内置模块—— http 模块 -JSONP

1. js 文件：
   var http = require("http");
   var url = require("url");
   http
   .createServer((req, res) => {
   var urlobj = url.parse(req.url, true);
   console.log(urlobj.query.callback);
   switch (urlobj.pathname) {
   case "/api/aaa":
   res.end(
   `${urlobj.query.callback}(${JSON.stringify({ name: "admin", age: 100, })})`
   );
   break;
   default:
   res.end("404");
   }
   })
   .listen(3000);

2. html 文件
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   </head>
   <body>
       <!-- jsonp接口调用  -->
       <script>
           var oscript = document.createElement('script');
           oscript.src = 'http://localhost:3000/api/aaa?callback=test'
           document.body.appendChild(oscript);
           function test(obj) {
               console.log(obj)
           }
       </script>
   </body>
   </html>

### 内置模块—— http 模块 -cors

1. js 文件：
   var http = require("http");
   var url = require("url");
   http
   .createServer((req, res) => {
   var urlobj = url.parse(req.url, true);
   res.writeHead(200, {
   "Content-Type": "application/json;charset=utf-8",
   "access-control-allow-origin": "\*", //主要就是这里添加请求头，运行所以请求头访问，解决跨域问题
   });
   switch (urlobj.pathname) {
   case "/api/aaa":
   res.end(
   `${JSON.stringify({ name: "admin", age: 100, })}`
   );
   break;
   default:
   res.end("404");
   }
   })
   .listen(3000);

2. html 文件：
      <!DOCTYPE html>
      <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   </head>
   <body>
       <!-- jsonp接口调用  -->
       <script>
           fetch("http://localhost:3000/api/aaa").then(res => res.json()).then(res => {
               console.log(res)
           })
       </script>
   </body>
   </html>

### 内置模块—— http 模块 - get

1. js：
   var http = require("http");
   var https = require("https");
   var url = require("url");
   http
   .createServer((req, res) => {
   var urlobj = url.parse(req.url, true);
   res.writeHead(200, {
   "Content-Type": "application/json;charset=utf-8",
   "access-control-allow-origin": "\*",
   });
   switch (urlobj.pathname) {
   case "/api/aaa":
   //客服端 去猫眼要数据
   httpget((data)=>{
   res.end(data);
   });
   break;
   default:
   res.end("404");
   }
   })
   .listen(3000);

function httpget(cd) {
var data = "";
https.get(
`https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E9%95%BF%E6%B2%99&ci=70&channelId=4`,
(res) => {
res.on("data", (chunk) => {
data += chunk;
});
res.on("end", () => {
console.log(data);
cd(data);
});
}
);
}

2. html：
      <!DOCTYPE html>
      <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   </head>
   <body>
       <!-- jsonp接口调用  -->
       <script>
           fetch("http://localhost:3000/api/aaa").then(res => res.json()).then(res => {
               console.log(res)
           })
       </script>
   </body>
   </html>

### 内置模块—— http 模块 - post

1. js:
   var http = require("http");
   var https = require("https");
   var url = require("url");
   http
   .createServer((req, res) => {
   var urlobj = url.parse(req.url, true);
   res.writeHead(200, {
   "Content-Type": "application/json;charset=utf-8",
   "access-control-allow-origin": "\*",
   });
   switch (urlobj.pathname) {
   case "/api/aaa":
   //客服端 去小米有品要数据
   httppost((data) => {
   res.end(data);
   });
   break;
   default:
   res.end("404");
   }
   })
   .listen(3000);

function httppost(cd) {
var data = "";
var options = {
hostname: "m.xiaomiyoupin.com",
port: "443",
path: "mtop/market/search/placeHolder",
method: "POST",
headers: {
"Content-Type": "application/json",
},
};
var req = https.request(options, (res) => {
res.on("data", (chunk) => {
data += chunk;
});
res.on("end", () => {
cd(data);
});
});

req.write(JSON.stringify([{}, { "baseParam": { "ypClient": 1 } }]));
req.end();
}

2. html:
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   </head>
   <body>
       <!-- jsonp接口调用  -->
       <script>
           fetch("http://localhost:3000/api/aaa").then(res => res.json()).then(res => {
               console.log(res)
           })
       </script>
   </body>
   </html>

### 内置模块—— http 模块 - 爬虫（cheerio）

var http = require("http");
var https = require("https");
var url = require("url");
var cheerio = require("cheerio");
http
.createServer((req, res) => {
var urlobj = url.parse(req.url, true);
res.writeHead(200, {
"Content-Type": "application/json;charset=utf-8",
"access-control-allow-origin": "\*",
});
switch (urlobj.pathname) {
case "/api/aaa":
//客服端 去猫眼要数据
httpget((data) => {
res.end(spider(data));
});
break;
default:
res.end("404");
}
})
.listen(3000);

function httpget(cd) {
var data = "";
https.get(`https://i.maoyan.com/`, (res) => {
res.on("data", (chunk) => {
data += chunk;
});
res.on("end", () => {
console.log(data);
cd(data);
});
});
}

function spider(data) {
// cheerio 需要 npm i cheerio 下载包
let $ = cheerio.load(data);
let $moviewlist = $(".column.content");
  console.log($moviewlist);
let movies = [];

$moviewlist.each((index, value) => {
movies.push({
title: $(value).find(".title").text(),
grade: $(value).find(".grade").text(),
actor: $(value).find(".actor").text(),
});
});
console.log(movies);
return JSON.stringify(movies);
}

### 内置模块—— event 模块

1. 实例：
   const EventEmitter = require("events");
   const event = new EventEmitter();
   event.on("play", (data) => {
   console.log("事件触发了-play", data);
   });
   event.on("run", (data) => {
   console.log("事件触发了-run", data);
   });

setTimeout(() => {
event.emit("play", "11111111");
},2000);

2. get 中使用 event {post 类似}
   const { EventEmitter } = require("events");
   var http = require("http");
   var https = require("https");
   var url = require("url");
   var event = null;
   http
   .createServer((req, res) => {
   var urlobj = url.parse(req.url, true);
   res.writeHead(200, {
   "Content-Type": "application/json;charset=utf-8",
   "access-control-allow-origin": "\*",
   });
   switch (urlobj.pathname) {
   case "/api/aaa":
   //客服端 去猫眼要数据
   event = new EventEmitter();
   event.on("play", (data) => {
   console.log(data);
   });
   httpget((data) => {
   res.end(data);
   });
   break;
   default:
   res.end("404");
   }
   })
   .listen(3000);
   function httpget(cd) {
   var data = "";
   https.get(
   `https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E9%95%BF%E6%B2%99&ci=70&channelId=4`,
   (res) => {
   res.on("data", (chunk) => {
   data += chunk;
   });
   res.on("end", () => {
   event.emit("play",data);
   cd(data);
   });
   }
   );
   }

### 内置模块—— fs 文件操作模块

1. mkdir ：创建目录
   const fs = require("fs");
   //创建目录
   fs.mkdir("./avatar",(err)=>{
   if(err && err.code === "EEXIST"){
   console.log("文件夹已经存在")
   }
   })

2. rename： 重命名目录
   const fs = require("fs");
   //重命名目录
   fs.rename("./avatar","./avatar2",(err)=>{
   if(err && err.code === "EEXIST"){
   console.log("文件夹已经存在")
   }
   })

3. rmdir：删除目录，如果目录有文件的话，删除不掉。只能删除空目录
   const fs = require("fs");
   //删除目录，
   fs.rmdir("./avatar2", (err) => {
   if (err && err.code === "EEXIST") {
   console.log("文件夹已经存在");
   }
   });

4. writeFile : 创建文件
   const fs = require("fs");
   //创建文本，第一个值：文件路径，第二个值：文件中的内容，文件中有值就会被替换
   fs.writeFile("./avatar/a.txt","hello world",(err)=>{
   // console.log(err)
   if(err && err.code === "EEXIST"){
   console.log("文件夹已经存在")
   }
   })

5. appendFile : 追加文本内容
   const fs = require("fs");
   //追加文本内容，第一个值：文件路径，第二个值：追加文件中的内容
   fs.appendFile("./avatar/a.txt","你好",(err)=>{
   // console.log(err)
   if(err && err.code === "EEXIST"){
   console.log("文件夹已经存在")
   }
   })

6. readFile : 读取文本内容
   const fs = require("fs");
   //读取文本内容，第一个值：文件路径， 第二个值： 文件格式
   fs.readFile("./avatar/a.txt","utf-8",(err,data)=>{
   if(!err){
   console.log(data);
   }
   })

7. unlink : 删除文件
   const fs = require("fs");
   //删除文件
   fs.unlink("./avatar/a.txt", (err) => {
   if (err && err.code === "EEXIST") {
   console.log("文件夹已经存在");
   }
   });

8. readdir ： 读取目录下的文件
   const fs = require("fs");
   //读取目录下的文件，第一个值：目录名称
   fs.readdir("./avatar",(err,data)=>{
   if(!err){
   console.log(data);
   }
   })

9. stat ： 读取目录下的文件的详细信息
   const fs = require("fs");
   //读取目录下的文件的详细信息，比如：创建时间等等
   fs.stat("./avatar",(err,data)=>{
   if(!err){
   console.log(data);
   }
   })

### mkdirSync : 创建目录 01 文件夹中的所有方法都可以加上 Sync 进行同步的执行，在没执行完之前，会阻塞后面的代码执行

const fs = require("fs");
try {
fs.mkdirSync("./avatar");
} catch (e) {
console.error;
}

### promises : 异步加载的第二种写法，第一种写法是 01 文件夹中的文件

const fs = require("fs").promises;
fs.mkdir("./aaa").then((data) => {
console.log(data);
});

### 异步加载的解决方式

1. 删除文件夹
   const fs = require("fs").promises;
   fs.readdir("./avatar").then(async (data) => { //第一种方式
   let arr = [];
   data.forEach((item) => {
   arr.push(fs.unlink(`./avatar/${item}`));
   });
   await Promise.all(arr);
   await fs.rmdir("./avatar");
   });

2. 删除文件夹
   const fs = require("fs").promises;
   fs.readdir("./avatar").then(async (data) => { //第二种方式
   await Promise.all(data.map((item) => fs.unlink(`./avatar/${item}`)));
   await fs.rmdir("./avatar");
   });

### 内置模块——stream 流模块

1. createReadStream ：读文件
   const fs = require("fs");
   //读文件
   const rs = fs.createReadStream("./1.txt", "utf8");
   rs.on("data", (chunk) => {
   console.log("chunk——", chunk);
   });
   rs.on("end", () => {
   console.log("end——");
   });
   rs.on("error", (err) => {
   console.log("err——", err);
   });

2. WriteStream ： 写文件
   const fs = require("fs");
   //写文件
   const ws = fs.WriteStream("./2.txt", "utf-8");
   ws.write("111111111111111111111");
   ws.write("22222222222222222222222");
   ws.write("333333333333333333333333");
   ws.end();

3. pipe : 让我们用 pipe()把:一个文件流和另一个文件流串起来,这样源文件的所有数据就自动写入到目标文件里了，所以，这实际上是一个复制文件的程序:
   const fs = require("fs");
   const readstream = fs.createReadStream("./1.txt", "utf-8"); //读
   const writeStream = fs.createWriteStream("./2.txt", "utf-8"); //写
   readstream.pipe(writeStream); //把读出来的内容通过管道写进指定文件中

### 内置模块 —— zlib 模块

1. gzip ： 压缩文件
   const http = require("http");
   const fs = require("fs");
   const zlib = require("zlib");
   const gzip = zlib.createGzip(); //压缩
   http
   .createServer((req, res) => {
   //res 可写流
   const readStream = fs.createReadStream("./index.js");
   res.writeHead(200, {
   "Content-Type": "application/x-javascript;charset=utf-8",
   "Content-Encoding": "gzip",
   });
   readStream.pipe(gzip).pipe(res);
   })
   .listen(3000, () => {
   console.log("server listening on");
   });

### 内置模块 —— crypto 模块

crypto 模块的目的是为了提供通用的加密和哈希算法。用纯 JavaScript 代码实现这些功能不是不可能， 但速度会非
常慢。Nodejs 用 C/C++实现这些算法后,通过 cypto 这个模块暴露为 JavaScript 接口，这样用起来方便，运行速度也快。

1. md5 : 加密
   const crypto = require("crypto");
   const hash = crypto.createHash("md5");
   hash.update("hello world");
   hash.update("adwadawdasdawdafgasf");
   console.log(hash.digest("hex"));

2. sha1 ： 加密
   const crypto = require("crypto");
   const hash = crypto.createHash("sha1");
   hash.update("hello world");
   hash.update("adwadawdasdawdafgasf");
   console.log(hash.digest("hex"));

3. createHmac : Hmac 算法也是一种哈希算法，它可以利用 MD5 或 SHA1 等哈希算法。不同的是，Hmac 还需要一个密钥
   const crypto = require("crypto");
   const hash = crypto.createHmac("sha1","aaaa");
   hash.update("hello world");
   hash.update("adwadawdasdawdafgasf");
   console.log(hash.digest("hex"));

4. AES : AES 是- -种常用的对称加密算法，加解密都用同-一个密钥。crypto 模块提供 了 AES 支持，但是需要自己封装好函
   数,便于使用:

const crypto = require("crypto");
function encrypt() {
//加密
let dep = crypto.createCipheriv("aes-128-cbc", key, iv);
return dep.update(data, "binary", "hex") + dep.final("hex");
}

function decrypt(key, iv, cryted) {
//解密
cryted = Buffer.from(cryted, "hex").toString("binary");
let dep = crypto.createDecipheriv("aes-128-cbc", key, iv);
return dep.update(cryted, "binary", "utf8") + dep.final("utf8");
}

let key = "abcdef1234567890";
let iv = "tbcdef1234567890";

let data = "aaaa--admin";

let cryted = encrypt(key, iv, data);

let decrypted = decrypt(key, iv, cryted);

console.log("加密后：", cryted);
console.log("解密后：", decrypted);

### express 简介

express 基于 node.js 平台，快速，开放，极简的 web 开发框架

1. 特色：
   1、Web 应用
   Express 是-个基于 Node.js 平台的极简、灵活的 web 应用开发框架，它提供-系列强大的特性，帮助你创建各种 Web 和移动设备应用。
   2、API
   丰富的 HTTP 快捷方法和任意排列组合的 Connect 中间件，让你创建健壮、友好的 API 变得既快速又简单。
   3、性能
   Express 不对 Nodejs 已有的特性进行二次抽象,我们只是在它之上扩展了 Web 应用所需的基本功能。
