// 복호화 해주는 함수(현재는 하드코딩)
function decrypt(data) {
  return "decrypted data";
}

function read() {
  return decrypt("data");
}

console.log("We are in the response module");

module.exports = { read, decrypt };
