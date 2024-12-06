// 암호화 해주는 함수(현재는 하드코딩)
function encrypt(data) {
  return "encrypted data";
}

function send(url, data) {
  const encryptedData = encrypt(data);
  console.log(`${encryptedData} is being sent to ${url}`);
}

module.exports = { send };
