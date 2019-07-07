import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { ProfessorComponent } from "./professor/professor.component";
import { AlunoComponent } from "./aluno/aluno.component";
import { ApiService } from "./../services/api.service";

@NgModule({
  declarations: [ProfessorComponent, AlunoComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ProfessorComponent, AlunoComponent],
  providers: [ApiService]
})
export class CreateModule {}
