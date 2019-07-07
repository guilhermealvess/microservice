import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ApiService } from "../../services/api.service";
import { map } from "rxjs/operators";

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-aluno",
  templateUrl: "./aluno.component.html",
  styleUrls: ["./aluno.component.css"]
})
export class AlunoComponent {
  formsAluno = new FormGroup({
    matricula: new FormControl(null),
    nome: new FormControl(null),
    curso: new FormControl(null),
    data_nascimento: new FormControl(null)
  });
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  onSubmit() {
    console.log(this.formsAluno.value);

    if (this.apiService.insert("aluno", this.formsAluno.value)) {
      console.log("DADOS INSERIDOS COM SUCESSO!");
    } else {
      console.log("ERRO AO INSERIR OS DADOS");
    }
  }
}
