const fs = require("fs").promises;

fs.mkdir("./aaa").then((data) => {
  console.log(data);
});
