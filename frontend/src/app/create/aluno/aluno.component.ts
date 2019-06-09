import { Component, OnInit } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-aluno",
  templateUrl: "./aluno.component.html",
  styleUrls: ["./aluno.component.css"]
})
export class AlunoComponent implements OnInit {
  constructor(
    matricula: string,
    nome: string,
    curso: string,
    data_nascimento: Date,
    id_disciplina
  ) {}

  ngOnInit() {}
}
