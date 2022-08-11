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
      "access-control-allow-origin": "*",
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
