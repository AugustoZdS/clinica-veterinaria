export class Pessoa {
  private nome: string;
  private cpf: string;

  constructor(nome: string, cpf: string) {
    this.nome = nome;
    this.cpf = cpf;
  }

  getNome(): string {
    return this.nome;
  }

  getCpf(): string {
    return this.cpf;
  }


  static validarCPF(cpf: string): boolean {
    return cpf !== null && cpf.length === 11;
  }
}
