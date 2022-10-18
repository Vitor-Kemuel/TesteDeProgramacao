import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DivisorComponent } from './divisor/divisor.component';

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild([
      {
        path: 'tarefa03', component: DivisorComponent
      }
    ])
  ]
})
export class Tarefa03Module { }
