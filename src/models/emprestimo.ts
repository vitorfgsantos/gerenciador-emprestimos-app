import { Usuario } from "./usuario";

export class Emprestimo {

  valor: number;
  valorReajustado?: number;
  data: Date;
  usuarioCredor: Usuario;
  usuarioDevedor: Usuario;

  constructor(usuarioCredor, usuarioDevedor, valor, data) {
    this.usuarioCredor = usuarioCredor;
    this.usuarioDevedor = usuarioDevedor;
    this.valor = valor;
    this.data = data;
  }

  confirmarPagamento(senhaCredor: string) {
    const senhaCorreta = this.usuarioCredor.validarSenha(senhaCredor);
    if (!senhaCorreta) throw "Senha digitada está incorreta"!;
  }

}
