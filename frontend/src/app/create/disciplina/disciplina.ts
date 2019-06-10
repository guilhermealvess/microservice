export class Disciplina {
  constructor(
    matricula: string,
    nome: string,
    curso: string,
    data_nascimento: Date,
    id_disciplina: string
  ) {
    this.matricula = matricula;
    this.nome = nome;
    this.curso = curso;
    this.data_nascimento = data_nascimento;
    this.id_disciplina = id_disciplina;
  }

  nome: string;
  matricula: string;
  curso: string;
  data_nascimento: Date;
  id_disciplina: string;
}
