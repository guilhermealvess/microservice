const express = require("express");
const functions = require("../processor");

var home = express.Router();

var disciplinas = express.Router("/disciplina");
var professor = express.Router("/professor");
var aluno = express.Router("/aluno");

disciplinas.get("/select", (req, res) => {
  res.status(200).json(functions.create("disciplina"));
});

professor.get("/select", (req, res) => {
  res.status(200).json(functions.create("professor"));
});

aluno.get("/select", (req, res) => {
  res.status(200).json(functions.create("aluno"));
});

disciplinas.put("/update", (req, res) => {
  var data = req.body.newData;
  var id = { id_disciplina: req.body.id };
  functions.update(data, "disciplina", id);
  res.status(200);
});

aluno.put("/update", (req, res) => {
  var data = req.body.newData;
  var id = { id_disciplina: req.body.id };
  functions.update(data, "aluno", id);
  res.status(200);
});

professor.put("/update", (req, res) => {
  var data = req.body.newData;
  var id = { id_disciplina: req.body.id };
  functions.update(data, "professor", id);
  res.status(200);
});

disciplinas.post("/create", (req, res) => {
  functions.create(req.body, "disciplina");
  res.status(200);
});

aluno.post("/create", (req, res) => {
  functions.create(req.body, "aluno");
  res.status(200);
});

professor.post("/create", (req, res) => {
  functions.create(req.body, "professor");
  res.status(200);
});

disciplinas.delete("/delete", (req, res) => {
  var id = req.body.id;
  functions._delete("disciplina", id);
  res.status(200);
});

aluno.delete("/delete", (req, res) => {
  var id = req.body.id;
  functions._delete("aluno", id);
  res.status(200);
});

professor.delete("/delete", (req, res) => {
  var id = req.body.id;
  functions._delete("professor", id);
  res.status(200);
});

module.exports = {
  home,
  disciplinas,
  aluno,
  professor
};
