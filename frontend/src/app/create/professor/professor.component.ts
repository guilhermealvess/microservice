import { Component, OnInit } from "@angular/core";

import { ApiService } from "../../services/api.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-professor",
  templateUrl: "./professor.component.html",
  styleUrls: ["./professor.component.css"]
})
export class ProfessorComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    nome: string,
    matricula_professor: string,
    faculdade: string,
    id_disciplina: string
  ) {}

  ngOnInit() {}
}
