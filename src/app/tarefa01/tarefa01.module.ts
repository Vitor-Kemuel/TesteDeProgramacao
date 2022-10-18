import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConversorComponent } from './conversor/conversor.component';

@NgModule({
  declarations: [
    ConversorComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: 'tarefa01', component: ConversorComponent
      }
    ])
  ]
})
export class Tarefa01Module { }
