const request = require("./request.js");
const response = require("./response.js");

// 구조분해 할당을 통하여 바로 가져와서 사용해도.
const { read } = require("./response.js");
const { decrypt } = require("./response.js");
// response.js에서 두 개의 module을 가지고 오고 있으니
// We are in the response module도 console에 두 번 찍혀야 할 것 같지만,
// 한 번 load(module에서 다른 module을 가져오는)한 것을 caching하고 있어서 한 번만 console에 찍히는.

function makeRequest(url, data) {
  // 요청을 보내기
  request.send(url, data);
  // 복호화한 결과 데이터를 return 하기
  return response.read();
}

const responseData = makeRequest("https://naver.com", "any data");
console.log(responseData);

// 모든 module에서 module을 가져오려 할 때마다 새롭게 가져오지 X. => caching이 되어 있어.
// caching 정보를 살펴보기 위해서는 console.log(require.cache);를 사용하면.
console.log(require.cache);
// console.log(module);
