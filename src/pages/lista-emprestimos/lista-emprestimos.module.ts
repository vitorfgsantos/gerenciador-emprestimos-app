import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaEmprestimosPage } from './lista-emprestimos';

@NgModule({
  declarations: [
    ListaEmprestimosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaEmprestimosPage),
  ],
})
export class ListaEmprestimosPageModule {}
