const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "postgres",
  port: 5432,
  hostname: "localhost",
  database: "asa",
  password: "postgres",
  username: "postgres"
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

const User = sequelize.define(
  "user",
  {
    // attributes
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    },
    idade: {
      type: Sequelize.INTEGER
    }
  },
  {
    // options
  }
);

User.sync({ force: true });

module.exports = { User, sequelize };
