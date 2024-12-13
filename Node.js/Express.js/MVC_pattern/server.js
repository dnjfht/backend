// Node.js에서 진입점이 되는  파일
// status code나 content type을 따로 명시하지 않아도 됨.

const express = require("express");
const usersController = require("./controllers/users.controller.js");
const postsController = require("./controllers/posts.controller.js");

const PORT = 4000;
const app = express();

// middleware 생성
app.use((req, res, next) => {
  const start = Date.now();
  console.log(`${req.method} ${req.url}`);
  next();
  const diffTime = Date.now() - start;
  console.log(`end: ${req.method} ${req.url} ${diffTime}ms`);
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("HELLO, I USED EXPRESS...!");
});

app.get("/users", usersController.getUsers);
app.post("/users", usersController.getUser);
app.get("/users/:userId", usersController.postUser);

app.get("/posts", postsController.getPost);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
