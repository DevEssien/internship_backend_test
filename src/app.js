const express = require("express");
const bodyParser = require("body-parser");
const UserRouter = require("./routes/user");
const AuthRouter = require("./routes/auth");
const GeneralMiddleware = require("./middleware/general");
const { Authenticate: protected } = require("./middleware/auth");

const { ErrorHandler, NotfoundHandler, DevLog } = GeneralMiddleware;

const app = express();

app.use(DevLog);

app.use(bodyParser.json());

const apiBase = "/api/users";

app.use(apiBase, AuthRouter);
app.use(apiBase, protected, UserRouter);

app.use(ErrorHandler);
app.use(NotfoundHandler);

module.exports = app;
