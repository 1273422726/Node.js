const crypto = require("crypto");
const hash = crypto.createHmac("sha1","aaaa");

hash.update("hello world");
hash.update("adwadawdasdawdafgasf");

console.log(hash.digest("hex"));
