import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfessorComponent } from "./professor/professor.component";
import { AlunoComponent } from "./aluno/aluno.component";

@NgModule({
  declarations: [ProfessorComponent, AlunoComponent],
  imports: [CommonModule]
})
export class UpdateModule {}
