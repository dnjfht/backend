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
  next();
  const diffTime = Date.now() - start;
  console.log(`end: ${req.method} ${req.url} ${diffTime}ms`);
});

// express.json()을 middleware로 등록해주면 body를 parsing(해석함)
app.use(express.json());

app.get("/", (req, res) => {
  res.send("HELLO, I USED EXPRESS...!");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ error: "Missing user name" });
  }

  // 원래는 undefined였다가 express.json()을 middleware를 등록하므로써 body를 해석하여 데이터를 받아오게 됨.
  console.log("req.body.name:" + req.body.name);

  const newUser = {
    // client에서 post method를 사용할 때 body에 넣어준 name 값을 받아오지 못함(undefined)
    // 기존에는 bodyParser module을 사용하여 body를 해석함.
    // but, express version 4.16.0부터는 express의 내장 middleware 함수 express.json()으로 대체.
    name: req.body.name,
    id: users.length,
  };
  users.push(newUser);
  res.json(newUser);
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
