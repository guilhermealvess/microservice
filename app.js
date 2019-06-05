const express = require("express");
const bodyParser = require("body-parser");

const router = require("./router/index");

app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", router.home);
app.use("/categorias", router.categorias);
app.use("/produtos", router.produtos);
app.use("/fornecedores", router.fornecedores);
app.use("/compras", router.compras);
app.use("/vendas", router.vendas);
app.use("/vendedores", router.vendedores);

app.listen(3000, () => {
  console.log("RUN SERVER IN PORT http://localhost:3000/");
});
