import { Animal } from "./Animal";
import { StatusConsulta } from "./StatusConsulta";

export class Consulta {
  id: number;
  animal: Animal;
  veterinario: string;
  dataHora: Date;
  status: StatusConsulta;
  motivoCancelamento?: string;
  valorConsulta: number;
  formaPagamento?: string;
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

  registrarPagamento(forma: string): void {
    if (
      forma === "pix" ||
      forma === "cartao" ||
      forma === "dinheiro"
    ) {
      this.formaPagamento = forma;
      this.pago = true;
    } else {
      throw new Error("Forma de pagamento inválida: " + forma);
    }
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
