// 암호화 해주는 함수(현재는 하드코딩)
function encrypt(data) {
  return "encrypted data";
}

function send(url, data) {
  const encryptedData = encrypt(data);
  console.log(`${encryptedData} is being sent to ${url}`);
}

// ECMAScript module에서 module을 내보내는 방법.
export { send };
