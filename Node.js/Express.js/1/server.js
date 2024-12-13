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
    // res.status(404).json({ error: "User not found...!" });

    // res.end() : 마지막 단계로 세션 종료.
    // 사용해야 할 때 : 데이터를 제공하지 않고 응답을 종료하려면 사용해야 함. 404 페이지에 유용.
    // 사용하지 않아도 될 때 : 데이터를 res.json() or res.send()로 보내면 알아서 종료.

    // res.end('<p>some html</p>')과 res.send('<p>some html</p>') 모두 화면에 보이는 것은 동일하나,
    // res.end()의 경우 Content-Type과 ETag 데이터가 없음.
    // 콘텐츠를 보낼 경우, ETag가 있어 캐시를 보다 효율적(성능)으로 사용할 수 있는 res.send()를 보내는게 더 나음.
    res.status(404).end("User not found...!");
  }
});

app.listen(PORT);
console.log(`Listening on port ${PORT}`);
