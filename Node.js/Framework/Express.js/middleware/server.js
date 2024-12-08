// Node.js에서 진입점이 되는  파일
// status code나 content type을 따로 명시하지 않아도 됨.

const express = require("express");
const PORT = 4000;
const users = [
  {
    id: 0,
    name: "Jack",
  },
  { id: 1, name: "Jennifer" },
];

const app = express();

// middleware 생성
app.use((req, res, next) => {
  const start = Date.now();

  console.log(`${req.method} ${req.url}`);

  // next()가 없으면 현재 middleware에서 빠져나가지 못함.
  // Main Task를 처리한 뒤, next() 뒷부분을 호출(Main Task까지 갔다가 돌아오는 것).
  next();

  // Main Task까지 갔다가 돌아오는 시간의 차이를 찍는 것.
  const diffTime = Date.now() - start;
  console.log(`end: ${req.method} ${req.url} ${diffTime}ms`);
});

app.get("/", (req, res) => {
  res.send("HELLO, I USED EXPRESS...!");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:userId", (req, res) => {
  const userId = Number(req.params.userId);
  const user = users[userId];

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).end("User not found...!");
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
