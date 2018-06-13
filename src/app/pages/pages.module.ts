import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard';
import { ConfiguracoesComponent, ConfiguracoesModule } from './configuracoes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ConfiguracoesModule
  ],
  declarations: [
    DashboardComponent, 
    ConfiguracoesComponent
  ]
})
export class PagesModule { }
