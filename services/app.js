const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const router = require("./router/index");
const port = 3000;

app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/", router.home);
app.use("/aluno", router.aluno);
app.use("/disciplina", router.disciplina);
app.use("/professor", router.professor);

app.listen(port, () => {
  console.log("RUN SERVER IN PORT http://localhost:" + port + "/");
});
