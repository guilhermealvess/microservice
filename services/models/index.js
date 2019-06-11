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

/*
const Categorias = sequelize.define("tb_categorias", {
  id_categoria: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  tituloCategoria: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: "compositeIndex"
  },
  descricaoCategoria: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: "compositeIndex"
  },
  fg_ativo: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

const Fornecedores = sequelize.define("tb_fornecedores", {
  id_fornecedor: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  cnpj: {
    type: Sequelize.STRING,
    allowNull: false
  },
  razaoSocial: {
    type: Sequelize.STRING,
    allowNull: false
  },
  telefone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  endereco: {
    type: Sequelize.STRING,
    allowNull: false
  },
  contato: {
    type: Sequelize.STRING,
    allowNull: false
  },
  fg_ativo: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

const Vendedores = sequelize.define("tb_vendedores", {
  id_vendedor: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  carteiraTrabalho: {
    type: Sequelize.STRING,
    allowNull: false
  },
  telefone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  dataAdmissao: {
    type: Sequelize.DATE,
    allowNull: false
  },
  fg_ativo: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

const Produtos = sequelize.define("tb_produtos", {
  id_fornecedor: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Fornecedores,
      key: "id_fornecedor",
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  id_produto: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  id_categoria: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Categorias,
      key: "id_categoria",
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  nomeProduto: {
    type: Sequelize.STRING,
    allowNull: false
  },
  descricaoProduto: {
    type: Sequelize.STRING,
    allowNull: false
  },
  valorUnitario: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  quantidade: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  quantidadeMinima: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  fg_ativo: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

const Vendas = sequelize.define("tb_vendas", {
  id_venda: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  id_vendedor: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Vendedores,
      key: "id_vendedor",
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  id_categoria: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Categorias,
      key: "id_categoria",
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  id_produto: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Produtos,
      key: "id_produto",
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  dataVenda: {
    type: Sequelize.DATE,
    allowNull: false
  },
  valorTotal: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  quantidade: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  fg_ativo: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

const Compras = sequelize.define("tb_compras", {
  id_compra: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  id_fornecedor: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Fornecedores,
      key: "id_fornecedor",
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  id_produto: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Produtos,
      key: "id_produto",
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  id_categoria: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: Categorias,
      key: "id_categoria",
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  },
  dataCompra: {
    type: Sequelize.DATE,
    allowNull: false
  },
  valorTotal: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  quantidade: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  fg_ativo: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});
*/
//////////////////////////////////////////////// DAQUI PRA FRENTE ///////////////////////////////////////////

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
  id_disciplina: {
    type: Sequelize.STRING,
    allowNull: false,
    references: {
      model: Disciplina,
      key: "id_disciplina",
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  }
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
  },
  id_disciplina: {
    type: Sequelize.STRING,
    allowNull: false,
    references: {
      model: Disciplina,
      key: "id_disciplina",
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    }
  }
});

sequelize
  .sync({ force: true })
  .then(() => {
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
  })
  .then(() => {
    Professor.bulkCreate([
      {
        matricula_professor: "1",
        nome: "marcio",
        faculdade: "UFU",
        id_disciplina: "12"
      },

      {
        matricula_professor: "2",
        nome: "marcelao",
        faculdade: "UFU",
        id_disciplina: "13"
      }
    ]);
  })
  .then(() => {
    Aluno.bulkCreate([
      {
        matricula: "3",
        nome: "aquino",
        curso: "teatro",
        data_nascimento: "1995-02-1",
        id_disciplina: "12"
      },

      {
        matricula: "8",
        nome: "andre",
        curso: "engenharia",
        data_nascimento: "1994-02-1",
        id_disciplina: "13"
      }
    ]);
  });

module.exports = { Aluno, Disciplina, Professor, sequelize };
