import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { Tarefa01Module } from './tarefa01/tarefa01.module';
import { Tarefa02Module } from './tarefa02/tarefa02.module';
import { Tarefa03Module } from './tarefa03/tarefa03.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    Tarefa01Module,
    Tarefa02Module,
    Tarefa03Module,
    RouterModule.forRoot([
      {
        path: "", redirectTo: '', pathMatch: 'full'
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }