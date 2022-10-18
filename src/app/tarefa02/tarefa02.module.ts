import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JogoDaVidaComponent } from './jogo-da-vida/jogo-da-vida.component';

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild([
      {
        path: 'tarefa02', component: JogoDaVidaComponent
      }
    ])
  ]
})
export class Tarefa02Module { }
