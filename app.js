const express = require("express");
const cors = require("cors");
const app = express();
const database = require("./src/utils/index");
const UserController = require("./src/controller/UserController");
const { connect } = require("http2");
const { error } = require("console");
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "X-PINGOTHER, Content-Type, Authorization"
  );
  app.use(cors());
  next();
});

app.get("/", async (req, res) => {
  try {
    return res.json({ message: certo });
  } catch (err) {
    return res.json({ error: err });
  }
});

app.post("/saveUser", UserController.post);

app.listen(8080, () => {
  database.connect();
  console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});
