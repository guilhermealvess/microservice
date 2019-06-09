import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-disciplina",
  templateUrl: "./disciplina.component.html",
  styleUrls: ["./disciplina.component.css"]
})
export class DisciplinaComponent implements OnInit {
  constructor(
    matricula_professor: string,
    id_disciplina: string,
    carga_horaria: Int16Array
  ) {}

  ngOnInit() {}
}
