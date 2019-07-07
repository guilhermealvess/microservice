import { AlunoComponent } from "./create/aluno/aluno.component";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { CreateModule } from "./create/create.module";
import { ProfessorComponent } from "./create/professor/professor.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CreateModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "aluno", component: AlunoComponent },
      { path: "professor", component: ProfessorComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
