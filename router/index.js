const express = require("express");
const engine = require("../processor");

var home = express.Router();

var categorias = express.Router();
var produtos = express.Router();
var fornecedores = express.Router();
var compras = express.Router();
var vendas = express.Router();
var vendedores = express.Router();

var routers = [
  home,
  categorias,
  produtos,
  fornecedores,
  compras,
  vendas,
  vendedores
];

function __get(routers) {
  routers.forEach(router => {
    router.get("/select", (req, res) => {
      console.log(req.body);
      res.status(200).json(req.body);
    });
  });
}

function __post(routers) {
  routers.forEach(router => {
    router.post("/insert", (req, res) => {
      res.status(200).json();
    });
  });
}

function __put(routers) {
  routers.forEach(router => {
    router.put("/update", (req, res) => {
      res.status(200).json();
    });
  });
}

function __delete(routers) {
  routers.forEach(router => {
    router.delete("/delete", (req, res) => {
      res.status(200).json();
    });
  });
}

__get(routers);
__post(routers);
__put(routers);
__delete(routers);

module.exports = {
  home,
  categorias,
  produtos,
  fornecedores,
  compras,
  vendas,
  vendedores
};
