// post에 관한 로직을 처리

const path = require("path");

function getPost(req, res) {
  //res.send("<div><h1>Post Title</h1></div>");
  res.sendFile(
    // path.join : 여러 세그먼트를 하나의 경로로 결합
    // __dirname : 현재 실행하는 파일의 절대 경로
    path.join(__dirname, "..", "public", "images", "cherry-juice.jpg")
  );
}

module.exports = {
  getPost,
};
