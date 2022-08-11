var http = require("http");
var https = require("https");
var url = require("url");
http
  .createServer((req, res) => {
    var urlobj = url.parse(req.url, true);
    res.writeHead(200, {
      "Content-Type": "application/json;charset=utf-8",
      "access-control-allow-origin": "*",
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
