export class Pessoa {
  nome: string;
  cpf: string;
  telefone: string;
  email: string;

  constructor(nome: string, cpf: string, telefone: string, email: string) {
    this.nome = nome;
    this.cpf = cpf;
    this.telefone = telefone;
    this.email = email;
  }

  static validarCPF(cpf: string): boolean {
    return cpf !== null && cpf.length === 11;
  }
}
