const express = require("express");
const bodyParser = require("body-parser");
const UserRouter = require("./routes/user");
const AuthRouter = require("./routes/auth");
const { Authenticate: protected } = require("./middleware/auth");

const app = express();

const apiBase = "/api/users";
app.use(bodyParser.json());

app.use(apiBase, AuthRouter);
app.use(apiBase, protected, UserRouter);

module.exports = app;
