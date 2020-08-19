const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authenticate = require('../database/middleware/restricted');

const usersRouter = require('../database/users/users-router')
const authRouter = require('../database/auth/auth-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/", authRouter);
server.use("/api/users", authenticate, usersRouter);

server.get("/", (req, res) => {
    res.status(200).json({ api: "up and ATOM" });
  });
  
  module.exports = server;