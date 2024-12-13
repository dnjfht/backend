// Node.js에서 진입점이 되는  파일
// status code나 content type을 따로 명시하지 않아도 됨.

const express = require("express");
const usersRouter = require("./routes/users.router.js");
const postsRouter = require("./routes/posts.router.js");

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

app.use(express.json());

// 이 부분이 baseUrl을 의미
app.use("/users", usersRouter);
app.use("/posts", postsRouter);

app.get("/", (req, res) => {
  res.send("HELLO, I USED EXPRESS...!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
