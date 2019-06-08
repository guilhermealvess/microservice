import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorComponent } from './professor/professor.component';
import { AlunoComponent } from './aluno/aluno.component';
import { DisciplinaComponent } from './disciplina/disciplina.component';

@NgModule({
  declarations: [ProfessorComponent, AlunoComponent, DisciplinaComponent],
  imports: [
    CommonModule
  ]
})
export class UpdateModule { }
