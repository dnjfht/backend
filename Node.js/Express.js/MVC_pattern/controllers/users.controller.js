// user에 관한 로직을 처리

const model = require("../models/users.model.js");

function getUsers(req, res) {
  res.json(model);
}

function getUser(req, res) {
  const userId = Number(req.params.userId);
  const user = model[userId];

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).end("User not found...!");
  }
}

function postUser(req, res) {
  if (!req.body.name) {
    return res.status(400).json({ error: "Missing user name" });
  }

  const newUser = {
    name: req.body.name,
    id: model.length,
  };
  model.push(newUser);
  res.json(newUser);
}

module.exports = {
  getUsers,
  getUser,
  postUser,
};
