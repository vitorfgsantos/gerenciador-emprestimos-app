export class Usuario {

  nome: string;
  senha: string;

  constructor(nome, senha) {
    this.nome = nome;
    this.senha = senha;
  }

  validarSenha(senha: string) {
    return senha === this.senha;
  }

}
