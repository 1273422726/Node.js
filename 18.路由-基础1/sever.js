const http = require("http");
const routed = require("./route");
http
  .createServer((req, res) => {
    const myURL = new URL(req.url, "http://127.0.0.1");
    routed(res, myURL.pathname);
    res.end();
  })
  .listen(3000, () => {
    console.log("server listening on");
  });
