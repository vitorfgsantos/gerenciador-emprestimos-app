import { Injectable } from "@angular/core";

import { Usuario } from "../models/usuario";
import { Emprestimo } from "../models/emprestimo";

@Injectable()
export class Sistema {

  EMPRESTIMOS = new Array<Emprestimo>();
  USUARIOS = new Array<Usuario>();

  constructor() {
    this.criaBaseDeDados();
  }

  criaBaseDeDados() {
    const JOAO = new Usuario('João', '123');
    const MARIA = new Usuario('Maria', '321');

    this.USUARIOS = [
      JOAO,
      MARIA
    ];

    this.EMPRESTIMOS = [
      new Emprestimo(JOAO, MARIA, 10, new Date(2011, 9, 3))
    ];
  }

  obterListaEmprestimos(nomeCredor, nomeDevedor): Emprestimo[] {
    const credor = this.obterUsuarioPeloNome(nomeCredor);
    if (!credor) throw "Credor não existe";

    const devedor = this.obterUsuarioPeloNome(nomeDevedor);
    if (!devedor) throw "Devedor não existe";

    const emprestimos = this.EMPRESTIMOS.filter(emprestimo =>
      emprestimo.usuarioCredor === credor &&
      emprestimo.usuarioDevedor === devedor
    );

    return emprestimos.map(emprestimo => {
      // Aqui, realizar cálculo do valor reajustado
      // const diferencaEmDias = this.getDiferencaEmDias(emprestimo.data, new Date());
      // for(let index = 0; index < )
      // emprestimo.valorReajustado = 100;
      emprestimo.valorReajustado = 0;

      return emprestimo;
    })
  }

  obterUsuarioPeloNome(nome: string): Usuario {
    return this.USUARIOS.find(usuario => usuario.nome === nome);
  }

  getDiferencaEmDias(a, b) {
    var _MS_PER_DAY = 1000 * 60 * 60 * 24;
    var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }



}
