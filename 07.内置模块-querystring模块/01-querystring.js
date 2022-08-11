var str = "name=admin&age=22&location=dalian";
var querystring = require("querystring");
var obj = querystring.parse(str);
console.log(obj);

var myobj = {
  a: 1,
  b: 2,
  c: 3,
};
console.log(querystring.stringify(myobj));
var str1 = "id=3&city=北京&url=https://www.baidu.com";
console.log(querystring.escape(str1));

var str2 =
  "id%3D3%26city%3D%E5%8C%97%E4%BA%AC%26url%3Dhttps%3A%2F%2Fwww.baidu.com";

console.log(querystring.unescape(str2));
