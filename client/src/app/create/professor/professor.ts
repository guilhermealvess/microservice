export class Professor {
  constructor(
    nome: string,
    matricula_professor: string,
    faculdade: string,
    id_disciplina: string
  ) {
    this.matricula_professor = matricula_professor;
    this.faculdade = faculdade;
    this.id_disciplina = id_disciplina;
    this.nome = nome;
  }

  matricula_professor: string;
  faculdade: string;
  id_disciplina: string;
  nome: string;
}
