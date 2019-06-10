import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-disciplina",
  templateUrl: "./disciplina.component.html",
  styleUrls: ["./disciplina.component.css"]
})
export class DisciplinaComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}
}
