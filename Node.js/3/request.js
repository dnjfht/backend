// 이런 식으로도 module을 내보낼 수.
// exports.A = 1; => 이런 식으로 module을 생략할 수.
module.exports.A = 1;
exports.B = 2;

// default로 module을 내보내려고 할 때는 이름을 생략.
// 이럴 경우 module을 가져다 사용할 때,
// const encrypt = require("./response"); 이렇게 가져다 사용.

// // 암호화 해주는 함수(현재는 하드코딩)
// module.exports = function encrypt(data) {
//   return "encrypted data";
// };

// https.js 뿐만 아니라, request.js에서도 response.js의 module을 가져오면, module을 다시 새롭게 가져오지 X.
// => caching이 되어 있어.
const { read } = require("./response.js");

function encrypt(data) {
  return "encrypted data";
}

function send(url, data) {
  const encryptedData = encrypt(data);
  console.log(`${encryptedData} is being sent to ${url}`);
}

// module을 내보내는 방법이 여러 가지 있지만, 이 방법이 가장 좋은 방법.
module.exports = { send };
