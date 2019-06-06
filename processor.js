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

function create(data, table) {
  table = classe(table);
  table.create(data);
}

function update(data, table, id) {
  table = classe(table);
  table.update(
    { data },
    {
      where: id
    }
  );
  return true;
}

function read(table) {
  table = classe(table);
  return table.findAll();
}

function _delete(table, id) {
  table = classe(table);
  table.destroy(id);
  return true;
}

module.exports = { create, update, read, _delete };
