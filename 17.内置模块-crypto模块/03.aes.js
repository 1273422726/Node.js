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
