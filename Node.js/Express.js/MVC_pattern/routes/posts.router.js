const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts.controller.js");

router.get("/", postsController.getPost);

module.exports = router;
