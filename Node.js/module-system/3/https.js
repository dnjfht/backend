const request = require("./request.js");
const response = require("./response.js");
const { read } = require("./response.js");
// 구조분해 할당을 통하여 바로 가져와서 사용해도.

function makeRequest(url, data) {
  // 요청을 보내기
  request.send(url, data);
  // 복호화한 결과 데이터를 return 하기
  return response.read();
}

const responseData = makeRequest("https://naver.com", "any data");
console.log(responseData);
// console.log(module);
