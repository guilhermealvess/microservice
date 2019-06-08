import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { ProfessorComponent } from "./professor/professor.component";
import { AlunoComponent } from "./aluno/aluno.component";
import { DisciplinaComponent } from "./disciplina/disciplina.component";
import { ApiService } from "./../services/api.service";

@NgModule({
  declarations: [ProfessorComponent, AlunoComponent, DisciplinaComponent],
  imports: [CommonModule, FormsModule],
  exports: [ProfessorComponent],
  providers: [ApiService]
})
export class CreateModule {}
