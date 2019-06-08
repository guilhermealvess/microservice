import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { AlunoComponent } from './aluno/aluno.component';
import { ProfessorComponent } from './professor/professor.component';

@NgModule({
  declarations: [DisciplinaComponent, AlunoComponent, ProfessorComponent],
  imports: [
    CommonModule
  ]
})
export class DeleteModule { }
