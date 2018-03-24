import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Emprestimo } from '../../models/emprestimo';
import { Sistema } from '../../services/sistema.service';

@IonicPage()
@Component({
  selector: 'page-lista-emprestimos',
  templateUrl: 'lista-emprestimos.html',
})
export class ListaEmprestimosPage {

  emprestimos = new Array<Emprestimo>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public sistema: Sistema
  ) {
    this.emprestimos = navParams.get('emprestimos');
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ListaEmprestimosPage');
  // }

  quitar(emprestimo: Emprestimo) {
    let prompt = this.alertCtrl.create({
      title: 'Senha',
      message: "O credor deve digitar sua senha para confirmar o pagamento.",
      inputs: [{
        name: 'senha',
        placeholder: 'Senha',
        type: 'password'
      }],
      buttons: [{
        text: 'Cancel',
      }, {
        text: 'Quitar',
        handler: data => {

          try {
            emprestimo.confirmarPagamento(data.senha);

            const index = this.emprestimos.indexOf(emprestimo);
            this.emprestimos.splice(index, 1);

            // Retirar isto daqui
            const indexSistema = this.sistema.EMPRESTIMOS.indexOf(emprestimo);
            this.sistema.EMPRESTIMOS.splice(indexSistema, 1)

          } catch (error) {
            let toast = this.toastCtrl.create({
              message: error,
              duration: 3000
            });
            toast.present();
          }
        }

      }]
    });
    prompt.present();
  }

}
