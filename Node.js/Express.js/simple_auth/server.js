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

app.post("/login", (req, res) => {
  const username = req.body.username;
  const user = { name: username };

  // jwt 사용법 : token을 생성할 때 jwt.sign method 사용
  // => jwt.sign({foo : "bar", privateKey, {algorithm : "RS256"}}) payload + secretText + 알고리즘(옵션)
  const accessToken = jwt.sign(user, secretText);
  res.json({ accessToken: accessToken });
});

app.get("/posts", authMiddleware, (req, res) => {
  res.json(posts);
});

function authMiddleware(req, res, next) {
  // token을 request headers에서 가져오기 => "Bearer token" 형태
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  // status => 상태 코드만 설정
  // sendStatus => 상태 코드를 설정하면서 메시지 설정이랑 반환하는거까지 다 같이
  if (token === null) return res.sendStatus(401);

  // token이 있으니 유효한 token인지 확인
  jwt.verify(token, secretText, (err, user) => {
    console.log(err);
    if (err) return res.sendStatus(403);

    // 이 middleware를 통과하고 다음 middleware로 넘어갈 때 user 정보를 사용하려면
    // req.user = user; 형태로 넘겨줄 수 있음
    req.user = user;
    next();
  });
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
