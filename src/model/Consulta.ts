import { Animal } from "./Animal";
import { StatusConsulta } from "./StatusConsulta";
import { FormaPagamento } from "./FormaPagamento";

export class Consulta {
  id: number;
  animal: Animal;
  veterinario: string;
  dataHora: Date;
  status: StatusConsulta;
  motivoCancelamento?: string;
  valorConsulta: number;
  formaPagamento?: FormaPagamento;
  pago: boolean;

  constructor(
    id: number,
    animal: Animal,
    veterinario: string,
    dataHora: Date,
    valorConsulta: number
  ) {
    if (animal === null) {
      throw new Error("animal nulo");
    }

    if (valorConsulta < 0) {
      throw new Error("valor negativo");
    }

    if (!veterinario || veterinario.length === 0) {
      throw new Error("sem veterinário");
    }

    this.id = id;
    this.animal = animal;
    this.veterinario = veterinario;
    this.dataHora = dataHora;
    this.valorConsulta = valorConsulta;
    this.status = StatusConsulta.AGENDADA;
    this.pago = false;
  }

  registrarPagamento(forma: FormaPagamento): void {
  this.formaPagamento = forma;
  this.pago = true;
}

  cancelar(motivo: string): void {
    this.status = StatusConsulta.CANCELADA;
    this.motivoCancelamento = motivo;
  }

  imprimirResumo(): void {
    console.log(
      "[Consulta #" +
      this.id +
      "] " +
      this.animal.nome +
      " | Vet: " +
      this.veterinario +
      " | Status: " +
      this.status +
      " | Valor: R$" +
      this.valorConsulta +
      " | Pago: " +
      (this.pago ? "Sim" : "Não")
    );
  }
}
