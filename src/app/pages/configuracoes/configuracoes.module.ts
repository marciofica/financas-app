import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PlanoDeContasComponent, CreateComponent, PlanoDeContasEditComponent, PlanoDeContasDeleteComponent } from './plano-de-contas';
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
    TiposPagamentosComponent, 
    CreateComponent, 
    PlanoDeContasEditComponent, 
    PlanoDeContasDeleteComponent
  ]
})
export class ConfiguracoesModule { }
