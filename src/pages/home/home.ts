import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Sistema } from '../../services/sistema.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nomeDevedor: string;
  nomeCredor: string;

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private sistema: Sistema
  ) { }

  obterListaEmprestimos(nomeCredor, nomeDevedor) {
    try {
      const emprestimos = this.sistema.obterListaEmprestimos(nomeCredor, nomeDevedor);

      this.navCtrl.push('ListaEmprestimosPage', {
        emprestimos: emprestimos
      });

    } catch (error) {
      let toast = this.toastCtrl.create({
        message: error,
        duration: 3000
      });
      toast.present();
    }
  }

}
