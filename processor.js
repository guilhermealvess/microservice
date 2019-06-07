const models = require("./models/index");
const sequelize = require("./models/index").sequelize;

function classe(table) {
  if (table == "disciplina") {
    return models.Disciplina;
  }
  if (table == "aluno") {
    return models.Aluno;
  }
  if (table == "professor") {
    return models.Professor;
  }
}

function create(req, res, table) {
  table = classe(table);
  table.create(req.body).then(() => {
    res.status(200).send("OK");
  });
}

function read(res, table) {
  table = classe(table);
  table.findAll().then(result => {
    res.status(200).json(result);
  });
}

function update(req, res, table) {
  table = classe(table);
  table.update(req.body.data, { where: req.body.id }).then(() => {
    res.status(200).send("OK");
  });
}

function _delete(req, res, table) {
  table = classe(table);

  table.destroy(req.body.id).then(() => {
    res.status(200).send("OK");
  });
}

module.exports = { create, update, read, _delete };
