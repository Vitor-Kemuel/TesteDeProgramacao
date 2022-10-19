import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConversorComponent } from './conversor/conversor.component';

@NgModule({
  declarations: [
    ConversorComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forChild([
      {
        path: 'tarefa01', component: ConversorComponent
      }
    ])
  ]
})
export class Tarefa01Module { }
