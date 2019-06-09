import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { ProfessorComponent } from "./professor/professor.component";
import { AlunoComponent } from "./aluno/aluno.component";
import { DisciplinaComponent } from "./disciplina/disciplina.component";
import { ApiService } from "./../services/api.service";

@NgModule({
  declarations: [ProfessorComponent, AlunoComponent, DisciplinaComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ProfessorComponent, AlunoComponent, DisciplinaComponent],
  providers: [ApiService]
})
export class CreateModule {}
