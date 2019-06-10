import { Component, OnInit } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-aluno",
  templateUrl: "./aluno.component.html",
  styleUrls: ["./aluno.component.css"]
})
export class AlunoComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}
}
