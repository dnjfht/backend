// Node.js에서 진입점이 되는  파일
// status code나 content type을 따로 명시하지 않아도 됨.

const express = require("express");
const usersRouter = require("./routes/users.router.js");
const postsRouter = require("./routes/posts.router.js");
const path = require("path");

const PORT = 4000;
const app = express();

// middleware 생성
app.use((req, res, next) => {
  const start = Date.now();
  console.log(`${req.method} ${req.url}`);
  next();
  const diffTime = Date.now() - start;
  // req.baseUrl : router 인스턴스가 마운트된 URL 경로로 수정
  console.log(`end: ${req.method} ${req.baseUrl} ${diffTime}ms`);
});

// 이미지, css 파일 및 js 파일과 같은 정적 파일을 제공하려면 express.static 내장 미들웨어 기능 사용
// public 디렉토리
// localhost:4000에서 index.html 파일이 뜨는 것을 확인 가능
// 만약 예를 들어, localhost:4000/static에서 index.html 파일이 뜨게 하고 싶다면 옵션 추가.
// => express.static 앞쪽에 "/static" 추가.(가상 경로 지정)

// 그런데 이런 경우에 error가 발생할 수 있음
// MVC_pattern 폴더에서 server.js를 실행시키는 것이 아닌, Express.js 폴더에서 node MVC_pattern/server.js 이런 식으로 실행을 시킬 경우.
// 다른 디렉토리에서 express 앱을 실행하는 경우 절대 경로를 사용하는 것이 더 안전함.
//app.use("/static", express.static("public"));
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(express.json());

// 이 부분이 baseUrl을 의미
app.use("/users", usersRouter);
app.use("/posts", postsRouter);

// set method를 사용하여 설정하는 부분
// 특정 엔진을 템플릿 엔진으로 사용하기 위한 설정
app.set("view engine", "hbs");
// view 파일들이 모여 있는 폴더를 명시
app.set("views", path.join(__dirname, "views"));

// 동적인 데이터와 정적인 파일을 합쳐주는 부분
// / 경로에 왔을 때 index.hbs 템플릿 파일을 사용하고 템플릿 파일에 사용된 변수를 넣어줌
app.get("/", (req, res) => {
  res.render("index", {
    imageTitle: "It is a cherry juice",
  });
});

app.get("/", (req, res) => {
  res.send("HELLO, I USED EXPRESS...!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
