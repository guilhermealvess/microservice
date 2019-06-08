const express = require("express");
const functions = require("../processor");

var home = express.Router("/");

var disciplina = express.Router("/disciplina");
var professor = express.Router("/professor");
var aluno = express.Router("/aluno");

home.get("/", (req, res) => {
  res.status(200).send("OK");
});

// READ
disciplina.get("/select", (req, res) => {
  functions.read(res, "disciplina");
});

professor.get("/select", (req, res) => {
  functions.read(res, "professor");
});

aluno.get("/select", (req, res) => {
  functions.read(res, "aluno");
});

//CREATE

disciplina.post("/insert", (req, res) => {
  functions.create(req, res, "disciplina");
});

professor.post("/insert", (req, res) => {
  functions.create(req, res, "professor");
});

aluno.post("/insert", (req, res) => {
  functions.create(req, res, "aluno");
});

// UPDATE
disciplina.put("/update", (req, res) => {
  functions.update(req, res, "disciplina");
});

aluno.put("/update", (req, res) => {
  functions.update(req, res, "aluno");
});

professor.put("/update", (req, res) => {
  functions.update(req, res, "professor");
});

// DELETE
disciplina.delete("/delete", (req, res) => {
  functions._delete(req, res, "disciplina");
});

professor.delete("/delete", (req, res) => {
  functions._delete(req, res, "professor");
});

aluno.delete("/delete", (req, res) => {
  functions._delete(req, res, "aluno");
});

module.exports = {
  home,
  disciplina,
  aluno,
  professor
};
