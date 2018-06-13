import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PlanoDeContasComponent } from './plano-de-contas';
import { EventosFinanceirosComponent } from './eventos-financeiros';
import { TiposPagamentosComponent } from './tipos-pagamentos';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    PlanoDeContasComponent, 
    EventosFinanceirosComponent, 
    TiposPagamentosComponent
  ]
})
export class ConfiguracoesModule { }
