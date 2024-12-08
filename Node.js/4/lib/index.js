// 폴더 안에 각 module을 담은 파일이 너무 많을 경우, index.js에서 처리.
// 이런 방식이 module 시스템을 굉장히 복잡하게.
// 가장 좋은 방법은 index.js를 만들지 않고 다른 파일에서 module을 직접 불러다 사용.

const request = require("./request.js");
const response = require("./response.js");
// 아래와 달리 위의 방식을 사용해도.
// 다른 파일에서 module을 가져다 사용할 때, lib.send(); 이런 식으로 사용 가능.
// 함수(module)를 하나씩 export 해주는 것은 귀찮은 일이기 때문에 좋은 방식은 X.
module.exports = {
  send: request.send,
  read: response.read,
};

// 이 외에도 spread 연산자를 사용한 방법이.
module.exports = {
  ...require("./request.js"),
  ...require("./response.js"),
};

module.exports = {
  request: require("./request.js"),
  response: require("./response.js"),
};
