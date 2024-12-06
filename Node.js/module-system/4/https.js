const lib = require("./lib");

function makeRequest(url, data) {
  // 요청을 보내기
  lib.request.send(url, data);
  // 복호화한 결과 데이터를 return 하기
  return lib.response.read();
}

const responseData = makeRequest("https://naver.com", "any data");
console.log(responseData);

// console.log(module);
