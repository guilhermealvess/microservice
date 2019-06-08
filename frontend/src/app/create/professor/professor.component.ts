import { Component, OnInit } from "@angular/core";

import { ApiService } from "../../services/api.service";

@Component({
  selector: "app-professor",
  templateUrl: "./professor.component.html",
  styleUrls: ["./professor.component.css"]
})
export class ProfessorComponent implements OnInit {
  constructor(private apiService: ApiService) {
    //var insert = this.apiService.insert("professor", {});
    var test = this.apiService.test();

    /*    var result = this.apiService.select("professor");
    console.log("[RESULT] ->", result);*/
    //var res = this.apiService.select("professor");
    console.log("DEU CERTO ", this.apiService.select("professor"));
  }

  ngOnInit() {}
}
