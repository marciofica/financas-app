import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard';
import { PlanoDeContasComponent } from './plano-de-contas';
import { RouterModule } from '@angular/router';
import { EventosFinanceirosComponent } from './eventos-financeiros';
import { TiposPagamentosComponent } from './tipos-pagamentos';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    DashboardComponent, 
    PlanoDeContasComponent, 
    EventosFinanceirosComponent, 
    TiposPagamentosComponent
  ]
})
export class PagesModule { }
