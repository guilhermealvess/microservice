const Sequelize = require("sequelize");
const config = require("../config");

const sequelize = new Sequelize(config);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

const Disciplina = sequelize.define("tb_disciplina", {
  id_disciplina: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: "compositeIndex",
    primaryKey: true
  },
  carga: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

const Professor = sequelize.define("tb_professor", {
  matricula_professor: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  faculdade: {
    type: Sequelize.STRING,
    allowNull: false
  },
  disciplina: {
    type: Sequelize.STRING,
    allowNull: false
  } /*
  id_disciplina: {
    type: Sequelize.STRING,
    allowNull: false,
    references: {
      model: Disciplina,
      key: "id_disciplina",
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  }*/
});

const Aluno = sequelize.define("tb_aluno", {
  matricula: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  curso: {
    type: Sequelize.STRING,
    allowNull: false
  },
  data_nascimento: {
    type: Sequelize.STRING,
    allowNull: false
  } /*,
  id_disciplina: {
    type: Sequelize.STRING,
    allowNull: false,
    references: {
      model: Disciplina,
      key: "id_disciplina",
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  }*/
});

/*.then(() => {
    Disciplina.bulkCreate([
      {
        id_disciplina: "12",
        carga: "3"
      },

      {
        id_disciplina: "13",
        carga: "4"
      }
    ]);
  })*/

sequelize
  .sync({ force: true })
  .then(() => {
    Professor.bulkCreate([
      {
        matricula_professor: "1",
        nome: "marcio",
        faculdade: "UFU",
        disciplina: "MTP" /*
        id_disciplina: "12"*/
      },
      {
        matricula_professor: "2",
        nome: "marcelao",
        faculdade: "UFU",
        disciplina: "ITC" /*
        /*,
        id_disciplina: "13"*/
      }
    ]);
  })
  .then(() => {
    Aluno.bulkCreate([
      {
        matricula: "3",
        nome: "aquino",
        curso: "teatro",
        data_nascimento: "1995-02-1" /*,
        id_disciplina: "12"*/
      },
      {
        matricula: "8",
        nome: "andre",
        curso: "engenharia",
        data_nascimento: "1994-02-1" /*,
        id_disciplina: "13"*/
      }
    ]);
  });

module.exports = { Aluno, Professor, sequelize };
