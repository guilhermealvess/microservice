import { FormGroup, FormControl } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ApiService } from "../../services/api.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-professor",
  templateUrl: "./professor.component.html",
  styleUrls: ["./professor.component.css"]
})
export class ProfessorComponent {
  formsProfessor = new FormGroup({
    nome: new FormControl(""),
    faculdade: new FormControl(""),
    matricula_professor: new FormControl(""),
    disciplina: new FormControl("")
  });

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {}

  onSubmit() {
    console.warn(this.formsProfessor.value);
    console.log(this.formsProfessor.value);

    if (this.apiService.insert("professor", this.formsProfessor.value)) {
      console.log("DADOS INSERIDOS COM SUCESSO!");
    } else {
      console.log("ERRO AO INSERIR OS DADOS");
    }
  }
}
