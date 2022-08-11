var http = require("http");
var https = require("https");
var url = require("url");
var cheerio = require("cheerio");
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
  // cheerio
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
