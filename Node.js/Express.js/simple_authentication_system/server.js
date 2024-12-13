const express = require("express");
const jwt = require("jsonwebtoken");

const PORT = 4000;
const app = express();
const secretText = "superSecret"; // 나중에 환경변수로 만들어줄 것

const posts = [
  { userName: "John", title: "Post 1" },
  {
    userName: "Han",
    title: "Post 2",
  },
];

app.use(express.json());

app.get("/", (req, res) => {
  res.send("HELLO");
});

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = { name: username };

  // jwt 사용법 : token을 생성할 때 jwt.sign method 사용
  // => jwt.sign({foo : "bar", privateKey, {algorithm : "RS256"}}) payload + secretText + 알고리즘(옵션)
  const accessToken = jwt.sign(user, secretText);
  res.json({ accessToken: accessToken });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
