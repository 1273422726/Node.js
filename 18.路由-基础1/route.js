const fs = require("fs");
function route(res, pathname) {
  switch (pathname) {
    case "/login":
      res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
      res.write(fs.readFileSync("./static/login.html"), "utf-8");
    case "/home":
      res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
      res.write(fs.readFileSync("./static/home.html"), "utf-8");
    default:
      res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
      res.write(fs.readFileSync("./static/404.html"), "utf-8");
  }
}

module.exports = route