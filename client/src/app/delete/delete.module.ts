import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlunoComponent } from "./aluno/aluno.component";
import { ProfessorComponent } from "./professor/professor.component";

@NgModule({
  declarations: [AlunoComponent, ProfessorComponent],
  imports: [CommonModule]
})
export class DeleteModule {}
