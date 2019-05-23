const database = require("./bd/index");

database.User.create([
  {
    nome: "guilherme",
    idade: 22
  }
]).then(() => {
  console.log("DEU CERTO!");
});

database.sequelize.sync({ force: true });
