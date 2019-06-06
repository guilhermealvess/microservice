const express = require("express");
const bodyParser = require("body-parser");

const router = require("./router/index");

app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", router.aluno);
app.use("/", router.disciplinas);
app.use("/", router.professor);

app.listen(3000, () => {
  console.log("RUN SERVER IN PORT http://localhost:3000/");
});
