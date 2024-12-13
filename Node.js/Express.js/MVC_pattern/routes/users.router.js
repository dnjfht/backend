// 소스코드를 조금 더 간단하게 만들어주는 역할
// 요청에 관련된 코드도 훨씬 더 많아져서 복잡할 수 있기 때문

const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller.js");

router.get("/", usersController.getUsers);
router.get("/:userId", usersController.getUser);
router.post("/", usersController.postUser);

module.exports = router;
